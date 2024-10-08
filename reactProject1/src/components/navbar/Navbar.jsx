import {
  Box,
  Link as ChakraLink,
  Image,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerOverlay,
  useDisclosure,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import React from "react";
import { Link, Link as RouterLink } from "react-router-dom";
import { logoPath } from "./path";
import login_image from "../../assets/login_image.png";
import heart from "../../assets/heart.png";
import shopping_bag from "../../assets/Shopping_bag.png";
import search from "../../assets/search.png";
import "./Navbar.css";
import Login from "../loginComp/login";

const Navbar = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();
  return (
    <Box className="container-box">
      <Box className="top-nav">
        <Box className="left-nav" display={{ base: "none", md: "flex" }}>
          <ChakraLink as={RouterLink} to="/customerservice">
            Customer Service
          </ChakraLink>
          <ChakraLink as={RouterLink} to="/newsletter">
            News Letter
          </ChakraLink>
          <ChakraLink as={RouterLink} to="/findstore">
            Find Store
          </ChakraLink>
        </Box>

        <Box display="flex" gap={3} justifyContent="center" alignItems="center">
          <IconButton
            display={{ base: "block", md: "none" }}
            // colorScheme="white"
            onClick={onDrawerOpen}
            color="black"
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
          />
          <Box className="logo-box">{logoPath}</Box>
        </Box>
        <Box className="right-nav">
          <Box className="right-nav-box">
            <Box onClick={onModalOpen} display="flex" gap={3}>
              <Image w={{ base: "20px", md: "25px" }} src={login_image} />
              <span>login</span>
            </Box>
          </Box>
          <Box className="right-nav-box">
            <ChakraLink display="flex" gap={3} as={RouterLink} to="/favourites">
              <Image w={{ base: "20px", md: "25px" }} src={heart} />
              <span>Favourites</span>
            </ChakraLink>
          </Box>
          <Box className="right-nav-box">
            <ChakraLink display="flex" gap={3} as={RouterLink} to="/shopping">
              <Image w={{ base: "20px", md: "25px" }} src={shopping_bag} />
              <span> Shopping</span>
            </ChakraLink>
          </Box>
          <Box display={{ base: "flex", md: "none" }}>
            <Image className="right-nav-box" w={25} src={search} />
          </Box>
        </Box>
      </Box>
      <Box className="bottom-nav" display={{ base: "none", md: "flex" }}>
        <ChakraLink as={RouterLink} to="/ladies">
          Ladies
        </ChakraLink>
        <ChakraLink as={RouterLink} to="/men">
          Men
        </ChakraLink>
        <ChakraLink as={RouterLink} to="/kids">
          Kids
        </ChakraLink>
        <ChakraLink as={RouterLink} to="/baby">
          Baby
        </ChakraLink>
        <ChakraLink as={RouterLink} to="/sport">
          Sports
        </ChakraLink>
      </Box>

      {/* // setting drawer for hamburger when screen size reduce// */}

      {/* <Button onClick={onOpen}>Open Drawer</Button> */}
      <Drawer placement="left" onClose={onDrawerClose} isOpen={isDrawerOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <IconButton
              icon={<CloseIcon />}
              onClick={onDrawerClose}
              aria-label="Close Menu"
            />
          </DrawerHeader>
          <DrawerBody>
            <Box
              display="flex"
              flexDirection="column"
              gap={5}
              marginBottom={23}
            >
              <ChakraLink as={RouterLink} to="/ladies">
                Ladies
              </ChakraLink>
              <ChakraLink as={RouterLink} to="/men">
                Men
              </ChakraLink>
              <ChakraLink as={RouterLink} to="/kids">
                Kids
              </ChakraLink>
              <ChakraLink as={RouterLink} to="/baby">
                Baby
              </ChakraLink>
              <ChakraLink as={RouterLink} to="/sports">
                Sports
              </ChakraLink>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={5}
              fontWeight="400"
              fontSize={10}
            >
              <ChakraLink as={RouterLink} to="/customerservice">
                Customer Service
              </ChakraLink>
              <ChakraLink as={RouterLink} to="/newsletter">
                News Letter
              </ChakraLink>
              <ChakraLink as={RouterLink} to="/findstore">
                Find Store
              </ChakraLink>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* setting login model while click on login */}
      <Modal onClose={onModalClose} size="xl" isOpen={isModalOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign In</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Login />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onModalClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Navbar;
