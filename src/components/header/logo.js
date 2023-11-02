const { default: Image } = require("next/image");
const { default: Link } = require("next/link");
import profileImage from "@/public/profile-img.png";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center text-dark dark:text-light">
      <div className="w-16 md:w-16 rounded-full overflow-hidden border border-solid border-dark mr-2 md:mr-4 dark:border-light">
        <Image
          src={profileImage}
          alt="CodeBucks"
          className="w-full h-auto rounded-full"
          priority
        />
      </div>
      <span className="font-bold dark:font-semibold text-xl">CodeBucks</span>
    </Link>
  );
};

export default Logo;
