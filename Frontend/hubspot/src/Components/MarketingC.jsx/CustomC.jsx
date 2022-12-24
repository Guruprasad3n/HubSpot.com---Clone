import {
  Box,
  Button,
  Flex,
  Text,
  Image,
  NumberInput,
  useBoolean,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import "./customStyle.css";
import Includes from "../MarkeingI/includes";
import { useState } from "react";
import { CheckIcon } from "@chakra-ui/icons";
// import "./customStyle.css";

export default function CustomCards({
  headOne,
  price,
  btnContent,
  defaultValue,
  marketing1,
  marketing2,
  marketing3,
  belowBtnContent,
  link,
  employees,
}) {
  return (
    <Flex w={["100%", "100%", "80%", "70%"]} direction={"column"}>
      <Box
        border={"1px solid lightgrey"}
        minH="75em"
        width="100%"
        padding={"0.3% 0.3% 0% 0.3%"}
      >
        {/* Top Section */}
        <Flex justify={"center"} alignItems="center">
          <Image
            w={"22px"}
            src={
              "https://static.hsappstatic.net/ui-addon-upgrades/static-9.7120/js/img/MarketingHub_Icon.svg"
            }
          />
          <Text
            fontSize={"2xl"}
            color="rgb(51, 71, 91)"
            ml={"2%"}
            alignItems={"center"}
          >
            {headOne}
          </Text>
        </Flex>
        <Box>
          <Text
            fontSize={"xs"}
            color="rgb(51, 71, 91)"
            fontWeight={"light"}
            marginLeft={"45%"}
          >
            start at
          </Text>
          <Text
            fontSize={"lg"}
            color="rgb(51, 71, 91)"
            fontWeight={"600"}
            marginLeft={"40%"}
          >
            {price}
          </Text>
          <Text
            fontSize={"xs"}
            color="rgb(51, 71, 91)"
            fontWeight={"light"}
            alignItems={"center"}
            marginLeft={"40%"}
          >
            billed monthly
          </Text>
          <Flex justifyContent={"center"}>
            <NumberInput
              step={1000}
              maxW={24}
              defaultValue={defaultValue}
              min={1000}
            >
              <NumberInputField
                borderRadius="0"
                bgColor="#F5F8FA"
                fontSize={"12px"}
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Text fontSize={"sm"} mt="0.4em" ml="1em">
              Marketing Contacts
            </Text>
          </Flex>
          <Text fontSize={"xs"} color="gray" textAlign={"center"}>
            {marketing1}
          </Text>
          <Text fontSize={"xs"} color="gray" textAlign={"center"}>
            {marketing2}
          </Text>
          <Text color="gray" fontSize={"xs"} textAlign={"center"}>
            {marketing3}
            <span className="underline">More details.</span>
          </Text>
          {/* <CustomSwitch/> */}
        </Box>

        <Box>
          {/*  **********************    SWITCH      ********************* */}
          <Flex
            width="75%"
            height={"50px"}
            bgColor={"gray.300"}
            m="auto"
            mt={"4%"}
            borderRadius={"25px"}
          >
            <Box ml="5%" width={"52%"}>
              <Text
                fontSize={"xs"}
                fontWeight={"semibold"}
                color="rgb(51, 71, 91)"
                mt={"5%"}
              >
                Pay Monthly
              </Text>
              <Text color="rgb(51, 71, 91)" fontSize={"xs"} fontWeight="light">
                Commit Annually
              </Text>
            </Box>
            <Box
              width="75%"
              ml={"15%"}
              backgroundColor="white"
              border={"1px solid teal"}
              borderRadius={"25px"}
            >
              <Text
                fontSize={"xs"}
                fontWeight={"semibold"}
                color="rgb(51, 71, 91)"
                mt={"4%"}
                textAlign={"center"}
              >
                Pay Upfront
              </Text>
              <Text
                color="rgb(51, 71, 91)"
                fontSize={"xs"}
                fontWeight="light"
                textAlign={"center"}
              >
                Commit Annually
              </Text>
            </Box>
          </Flex>
        </Box>
        <Button
          border="2px"
          fontSize={"sm"}
          backgroundColor={"#ff7a59"}
          color="white"
          width={"76%"}
          height="50px"
          mt="5%"
         marginLeft={"50px"}
        >
          {btnContent}
        </Button>
        <Box ml={"2em"} mt={"5%"}>
          <Text textAlign={"start"} color="gray" fontSize={"sm"}>
            <span className={link ? "underline" : ""}>{belowBtnContent}</span>{" "}
            plus:
          </Text>
          <BlueText employees={employees} />
        </Box>

        {/*                             B O T T O M      S E C T I O N                        */}
      </Box>
      <Box
        borderTop={"1px solid  lightgray"}
        height="50px"
        width={"100%"}
        textAlign="center"
      >
        <Text mt={"3%"} color="cyan.700">
          See all features
        </Text>
      </Box>
      <Box
        borderTop={"1px solid lightgray"}
        height="50px"
        width={"100%"}
        textAlign="center"
      >
        <Text mt={"3%"} color="cyan.700">
          Calculate your price
        </Text>
      </Box>
    </Flex>
  );
}

function BlueText({ employees }) {
  return (
    <Box>
      {employees.map((employee, index) => (
        <Box mb={"2em"} key={index}>
          <Text
            m={1}
            fontWeight={"bold"}
            fontSize={"sm"}
            textAlign={"start"}
            color={"#1F91AE"}
          >
            {employee.name}
          </Text>

          {employee.tasks.map((task, index) => (
            <Box display={"flex"} key={index}>
              <CheckIcon m={1} color={"gray"} mt={"0.2em"} />
              <Text m={1} fontSize={"xs"} textAlign={"start"}>
                {task}
              </Text>
            </Box>
          ))}

          {/* <hr /> */}
        </Box>
      ))}
    </Box>
  );
}

// function CustomSwitch(){
//     const SwitchOptions = {
//         OPTION1 : "Option 1",
//         OPTION2 : "Option 2"
//       }
//     const [activeOption, setActiveOption] = useState(
//         SwitchOptions.OPTION1
//       );

//       const handleSwitchClick = ( SwitchOptions) => {
//         setActiveOption(SwitchOptions);
//       };
//     return (
//         // <div className="background">
//         <Flex border="1px solid red" justifyContent={"center"} className="SwitchContainer">
//           <div
//             className="ToggleItem"
//             style={{
//               backgroundColor:
//                 activeOption === SwitchOptions.OPTION1 ? "grey" : "transparent"
//             }}
//             onClick={() => handleSwitchClick(SwitchOptions.OPTION1)}
//           >
//             <div className={"Text"}>Option 1</div>
//           </div>
//           <div
//             className="ToggleItem"
//             style={{
//               backgroundColor:
//                 activeOption === SwitchOptions.OPTION2 ? "grey" : "transparent"
//             }}
//             onClick={() => handleSwitchClick(SwitchOptions.OPTION2)}
//           >
//             <div className={"Text"}>Option 2</div>
//           </div>
//         </Flex>
//       // </div>
//     )
// }
