import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function ImgAvatar({
  imgSrc,
  fallback,
}: {
  imgSrc: string | undefined | null;
  fallback: string;
}) {
    console.log("img:" ,imgSrc);
    console.log("fb:" ,(fallback.split(" ")[0])[0]);
  return (
    <>
      <Avatar>
        <AvatarImage
        className="w-14 rounded-full my-auto"
          src={imgSrc? imgSrc : "/user.png"}
        />
        <AvatarFallback>
          {(fallback.split(" ")[0])[0]}
        </AvatarFallback>
      </Avatar>
    </>
  );
}
