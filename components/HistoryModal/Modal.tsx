"use client";

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Message, useAppContext } from "@/context/context";
import { Outgoing } from "../Message";
import Button from "@/base-ui/Button/Button";

export default function HistoryModal() {
  const {
    openHistoryModal: open,
    setOpenHistoryModal: setOpen,
    messages,
    userData,
  } = useAppContext();

  const messageComponent = messages.map((message: Message, index: number) => {
    if (message.uid === userData.uid) {
      return (
        <Outgoing
          uid={message.uid}
          pfp={message.profilePicture}
          username={message.username}
          timestamp={message.timestamp}
          key={index}
        >
          {message.message}
        </Outgoing>
      );
    }
  });

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white dark:bg-gray-700 dark:prose-invert  px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <Dialog.Title
                    as="h1"
                    className="text-3xl mb-5 font-semibold leading-6 text-gray-900 dark:text-gray-100"
                  >
                    Message History
                  </Dialog.Title>
                  <div className="max-h-[48rem] flex flex-col gap-5 overflow-auto">
                    {messageComponent.reverse()}
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <Button primary={false} onClick={() => setOpen(false)}>
                    Close
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
