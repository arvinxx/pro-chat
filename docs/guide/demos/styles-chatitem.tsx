/**
 * compact: true
 */
import { ChatMessage, ProChat } from '@ant-design/pro-chat';
import { useTheme } from 'antd-style';
import { useState } from 'react';
import { example } from './mocks/fullFeature';

export default () => {
  const theme = useTheme();
  const [chatList, setChatList] = useState<ChatMessage<Record<string, any>>[]>(
    example.initialChatsList,
  );

  return (
    <div style={{ background: theme.colorBgLayout }}>
      <ProChat
        chatList={chatList}
        onChatsChange={(chatList) => {
          setChatList(chatList);
        }}
        chatItemRenderConfig={{
          contentRender: (_, defaultContent) => {
            return (
              <div
                style={{
                  border: '1px solid #1890ff',
                  borderRadius: '8px',
                }}
              >
                {defaultContent}
              </div>
            );
          },
        }}
        sendMessageRequest={async (messages) => {
          const mockedData: string = `这是一段模拟的对话数据。本次会话传入了${messages.length}条消息`;
          return new Response(mockedData);
        }}
      />
    </div>
  );
};
