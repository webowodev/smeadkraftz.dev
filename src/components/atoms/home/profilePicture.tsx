import Image from "next/image";

export default function ProfilePicture() {
  return (
    <Image
      src="/images/profile-picture.jpeg"
      alt="profile"
      width={100}
      height={100}
    />
  );
}
