import { Box , Flex, Image, IconButton, Circle, Text, Spacer } from '@chakra-ui/react';
import { AddIcon, EditIcon, ArrowBackIcon, ThreeDotsIcon } from '@chakra-ui/icons';

import ChatMenu from './Menu';

interface ChatHeaderProps {
  groupName: string;
  groupLogos: string[];
  To: String;
  From : String;
  onEditClick: () => void;
  onBackClick: () => void;
}
const groupLogos = [
    'https://s3-alpha-sig.figma.com/img/942b/b446/be3cee11041fc68e442bddde90e0bc9c?Expires=1699833600&Signature=F34IKJHIvLkZaJ8e60IpOKXN3eKVknsAg8MjSim~EddUjn--DOVHyDv0zZCysN1YDqDDy5Yr~lshmVNm4AXN6k7EXuZYvGaSjWbSdd3mOl1Vt5KjuU9ckZeLWC6qZJApALDYoK1CmrY9kbAK8LDram6XfAr937nOIoS0DGRJY2fzHXq6cDFdtOSSChOwt9rz-QdZrJjEwh5NQx7yWOiZs6hp68G2lAUZ3AWQiiVR9zVvErkOKEKDemcZj9V6AwV13bbmd49I5ezspDhsVNlwe6UzRtffI1cv~BLYaQtO5Xjo88XytytI0CONZNETlLtb1SNsb~VIeAgarlmD3fhCDw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  "https://s3-alpha-sig.figma.com/img/4f20/d106/76ceb13ad159a69913c21b0d9c1d43f5?Expires=1699833600&Signature=fy~~KF48pIHndPc3w~Ip-DmRWUjU-7R0FrbkslXais8TYz4ko6iobBv49I0e7RTLzw9Q2BAKcSqfw7uTHDyrHciDs3LJw1nO6J~vbQP-zxJ3J2-RoFD5RgJ0TE~bgFJuHstyqD8Raktz6vQZxf2vslKre-zsT14fM0se5S-1EpFpC7x7td8W~qK9rkals8BcyHegX6dFEDfck0gNmoGDVLuwxezkASFCTsZCe356hW9YERXSP-d1n906t4DCZnEAkn3~RLOWA3-bp-rmAzF1qVtXQVLY1qoqKuRPqCXu0oyfGMnWvLlHpGhtLwua5z3EfaHfl1DK6Ww023GcgJCp8g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/c0ac/b5d2/63eabed0703bdcffd827d812f5905393?Expires=1699833600&Signature=plF3os45arWXoeKnxehS01om7EGr80x9WB~QndTaRJYYBx-VoGeDnvIiVr7DTcT5rgF4Xy3XNch7lYk6Hy1IUhKcnxbInYBgl68yxrz0WVawPKhPEfQHD4mFJ6PFUS6OEvk2-aW~zq5owxW~g51YnosEV7zOoNAOECifQDm4~mKmA9aTfxLCaxOM9H2X60ZEVA9HgU-U0uwnfKkDMPbzQm4bjOjMeGFcmgdNAK95Kmed0qP1G73sc0y3fost-9yTPKpFi6ZKLAxswB3T~XnT8G-lzaMkh9j-2Wq5UiqiYvaiTpVBIg6mseF9TbfMKctXqYOiKKxsbZt0GUuDHFVRrQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  
  "https://s3-alpha-sig.figma.com/img/c7c7/26b4/7f55a9a83e78a664763bc9af184bf99b?Expires=1699833600&Signature=EptxKqwqvhytIif~svIMwsEklDjlc8bpHe-uqqrqQAtkwkNSd6zB3Bmm8yb7Xcx9txrLKpdiDFZUBE14syKy6T-~MQW1VMbZvXybc0I6GCEoZ1kXgD~lWqJxmBI5dEBoVnkvS45yd4ilVdidE-yZq56Zd0l2tMbbTv7uKqCLh96q4QUhTwaQJOWaV7tb9v3dKioAKR1S5AWIvvcIf4yRGDaNmd5ibQE9wbycOxQP5hTgMwkTDy13ybqan95aJKScA6j-2ziAnI~Qd-78Q70xZQkMEfVIPBjSkIQRzG9A--rviG-SK6FIkupl~7ZVTfyWwPXRUN95qieSN7xDEM3bjA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    
  ]
const ChatHeader: React.FC<ChatHeaderProps> = ({ groupName, onEditClick, onBackClick , To , From }) => {
  return (
    <div className = "header">
    
    <Box p={2} borderBottom="1px solid #ccc">
      <Flex align="center" justify="space-between">
        <Flex align="center">
          <IconButton
            aria-label="Back"
            icon={<ArrowBackIcon />}
            onClick={onBackClick}
            variant="ghost"
          />
          
          <Text fontSize="lg" fontWeight="bold">
            {groupName}
          </Text>
        </Flex>
        <IconButton
          aria-label="Edit Group"
          icon={<EditIcon />}
          onClick={onEditClick}
          variant="ghost"
        />
      </Flex>
      
    </Box>
    <Box p={4} borderBottom="1px solid #ccc">
      <Flex align="center" justify="space-between">
          <Flex wrap="wrap" borderRadius="50%" maxW="55px" borderRadius="50%" overflow="hidden">
          {groupLogos.slice(0, 4).map((logo, index) => (
            <Box key={index} w="50%" borderRadius="50%" >
              <Image src={logo} alt={`User ${index}`} />
            </Box>
          ))}
        </Flex>
         
        
          <Flex justify ="start" align = 'left' direction ="column" flex= {1} ml = {3}>
          
           <Text fontSize="lg" fontWeight="bold">
            <Text color = "#606060" display = "inline-block">To</Text> : {To}
          </Text>
          <Text fontSize="lg" fontWeight="bold">
           <Text color = "#606060" display = "inline-block">From</Text> : {From}
          </Text>
         </Flex>
         
       
          <ChatMenu/>
      </Flex>
      
    </Box>
      
      
    </div>
  );
};

export default ChatHeader;
