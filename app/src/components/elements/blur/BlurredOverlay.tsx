
import { Box } from "@chakra-ui/react";

type BlurredOverlayProps = {
  blurAmount?: string; // ぼかしの量（例: '5px'）
  overlayContent?: React.ReactNode; // ぼかしの上に表示される任意のコンテンツ
  children: React.ReactNode; 
};

const BlurredOverlay: React.FC<BlurredOverlayProps> = ({
  blurAmount = '5px',
  overlayContent,
  children
}) => {
  return (
    <Box position="relative">
      <Box filter={`blur(${blurAmount})`} transition="0.3s">
        {children}
      </Box>
      {overlayContent && (
        <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
          {overlayContent}
        </Box>
      )}
    </Box>
  );
};

export default BlurredOverlay;
