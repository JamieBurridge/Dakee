import React, { useState } from "react";
import Topbar from "../../components/Topbar/Topbar";
import styles from "./index.module.scss";
import ChatMessagePreview from "../../components/ChatMessagePreview/ChatMessagePreview";
import NotificationBubble from "../../components/NotificationBubble/NotificationBubble";
import { useRouter } from "next/router";

const localsDummyData = [
  {
    id: 0,
    name: "John",
    message: {
      text: "A blind man walks into a bar, then a chair, then a table",
      sent: "2m",
    },
    profile_pic: "https://picsum.photos/200",
  },
];

const travellersDummyData = [
  {
    id: 1,
    name: "David Trindade",
    message: { text: "Paradise Cafe is a great place.", sent: "2m" },
    profile_pic: "https://picsum.photos/200",
  },
];

export default function Chats() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("locals");

  return (
    <main className="main_secondary">
      <Topbar
        showBackArrow={true}
        menu={true}
        link="/"
        useSecondaryColor={true}
      />
      <h1 className={styles.chat_heading}>Chat</h1>

      <div className={styles.chat_tabs}>
        <ul>
          <li
            onClick={() => {
              setActiveTab("locals");
            }}
            className={activeTab === "locals" ? styles.active : ""}
          >
            Locals
            {localsDummyData.length > 0 && (
              <NotificationBubble number={localsDummyData.length} />
            )}
          </li>
          <li
            onClick={() => {
              setActiveTab("travellers");
            }}
            className={activeTab === "travellers" ? styles.active : ""}
          >
            Travellers
            {travellersDummyData.length > 0 && (
              <NotificationBubble number={travellersDummyData.length} />
            )}
          </li>
        </ul>
        <hr />
      </div>

      <section className={styles.all_chats}>
        {activeTab === "locals" && (
          <>
            {localsDummyData?.map((local, index) => (
              <ChatMessagePreview
                name={local.name}
                message={local.message.text}
                timeSinceLastMessage={local.message.sent}
                profilePicture={local.profile_pic}
                key={index}
                onClick={() => {
                  router.push(`/chat/${local.id}`);
                }}
              />
            ))}
          </>
        )}

        {activeTab === "travellers" && (
          <>
            {travellersDummyData?.map((travellers, index) => (
              <ChatMessagePreview
                name={travellers.name}
                message={travellers.message.text}
                timeSinceLastMessage={travellers.message.sent}
                profilePicture={travellers.profile_pic}
                key={index}
                onClick={() => {
                  router.push(`/chat/${travellers.id}`);
                }}
              />
            ))}
          </>
        )}
      </section>
    </main>
  );
}
