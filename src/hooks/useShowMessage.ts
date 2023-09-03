import type { MessageParams } from "element-plus";
import { ElMessage } from "element-plus";
import "element-plus/es/components/message/style/css";
import "element-plus/es/components/message-box/style/css";

type MessageType = "success" | "warning" | "message" | "error";

export const useShowMessage = () => {
  const showMessage = (message: string, type: MessageType = "message", options?: MessageParams) => {
    ElMessage({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      message,
      type,
      options
    });
  };

  return { showMessage };
};
