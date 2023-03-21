import { useState } from "react";
import {
  Flex,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  FormControl,
  FormHelperText,
  InputRightElement,
  Image
} from "@chakra-ui/react";
import { FaUserAlt, FaLock, FaAddressCard, FaBriefcase } from "react-icons/fa";
import axios from "axios";
import TopBar from "../Navbar/TopBar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const signupPost = (creds) => {
  return axios.post("https://unit5project.onrender.com/users/signup", creds)
}


const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [signupCreds, setSignupCreds] = useState({})
  const handleShowClick = () => setShowPassword(!showPassword);

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupCreds({
      ...signupCreds,
      [name]: value,
    })
  }

  const signupForm = () => {
    if (signupCreds.name && signupCreds.Websitename && signupCreds.Companyname && signupCreds.email && signupCreds.password) {
      signupPost(signupCreds)
        .then((res) => {
          console.log(res.data.token)
          alert("Signup successfull 👍 ");
          navigate("/login")
        })
        .catch((e) => {
          console.log(e)
          alert("User with this email is already exist!")
        })
    } else {
      alert("Please fill all the feild with appropriate detail!");
    }
  }

  const handleClick = (e) => {
    e.preventDefault()
    signupForm()
  }


  return (

    <>
      <TopBar />
      <Navbar />
      <Flex
        flexDirection="column"
        width="100wh"
        height={["65vh", "70vh", "60vh", "100vh"]}
        backgroundColor="white"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Box minW={{ base: "90vw", sm: '80vw', md: "70vw", lg: '35vw' }}>
            <form>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
              >
                <FormControl>
                  <InputGroup>
                    <Input type="text" name="name" onChange={handleChange} placeholder="Full name" />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <Input type="text" name="Websitename" onChange={handleChange} placeholder="website name" />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <Input type="text" name="Companyname" onChange={handleChange} placeholder="company name" />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <Input type="email" name="email" onChange={handleChange} placeholder="email address" />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      onChange={handleChange}
                      placeholder="Password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormHelperText textAlign="right">
                    {/* <Link>forgot password?</Link> */}
                  </FormHelperText>
                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
                  onClick={handleClick}
                >
                  Sign Up
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
        <Box>

        </Box>
      </Flex>
      <Footer />
    </>
  );
};

export default Signup