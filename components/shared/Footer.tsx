import Image from "next/image"
import Link from "next/link"


const Footer = () => {
  return (
    <footer className="border-t">
      <div>
        <Link href={'/'}>
          {/* <Image src={"/assets/images/logo.svg"} alt="logo" /> */}
        </Link>
      </div>
    </footer>
  )
}

export default Footer