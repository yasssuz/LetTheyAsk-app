import Link from "next/link";

import { Link as ChakraLink } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

export default function GoBack({ whiteMode }) {
  return (
    <Link href='/' passHref>
      <ChakraLink
        fontWeight='bold'
        fontSize={["1.5rem", "1.5rem"]}
        lineHeight={["2rem", "2.2rem"]}
        color={whiteMode ? "white" : "semiGray"}
        display='flex'
        alignItems='center'
      >
        {whiteMode ? (
          <Image
            src='/assets/arrow.svg'
            alt='go'
            transform='rotate(90deg)'
            mr='1rem'
          />
        ) : (
          <Image
            src='/assets/arrow-blue.svg'
            alt='go'
            transform='rotate(90deg)'
            mr='1rem'
          />
        )}
        Go Back
      </ChakraLink>
    </Link>
  );
}
