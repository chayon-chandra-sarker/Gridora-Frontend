
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src="/main logo.png"
        alt="Gridora logo"
        width={100}
        height={100}
        priority
      />
    </div>
  );
};

export default Logo;

