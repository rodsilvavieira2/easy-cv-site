import { Box, HTMLChakraProps } from "@chakra-ui/react";

export const XXLShapeSvg: React.FC<HTMLChakraProps<"svg">> = (props) => {
  return (
    <Box
      as="svg"
      width="612"
      height="700"
      viewBox="0 0 612 683"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...(props as any)}
    >
      <path
        d="M612 271.5C612 498.765 427.765 683 200.5 683C-26.7652 683 -211 498.765 -211 271.5C-211 44.2348 -26.7652 -140 200.5 -140C427.765 -140 612 44.2348 612 271.5Z"
        fill="url(#paint0_linear_25_4)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_25_4"
          x1="200.5"
          y1="-140"
          x2="200.5"
          y2="683"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A13AF1" stopOpacity="0.65" />
          <stop offset="1" stopColor="#B62CF8" stopOpacity="0.704" />
        </linearGradient>
      </defs>
    </Box>
  );
};
