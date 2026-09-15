import RobotProfileImage from "../assets/image.png";
import UserImage from "../assets/user.png";

export function ChatMessage(props) {
  const message = props.message;
  const sender = props.sender;

  /*
        if (sender === "robot") {
          return (
            <div>
              <img src="robot.png" width="50px" />
              {message}
            </div>
          );
        }
          */

  return (
    <div
      className={
        sender === "user" ? "chat-message-user" : "chat-message-robot"
      }>
      {sender === "robot" && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img src={UserImage} className="chat-message-profile" />
      )}
    </div>
  );
}
