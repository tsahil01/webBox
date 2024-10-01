"use client";

import { validateUser } from "@/app/actions/validatePlayground";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page({ params }: { params: { containerId: string } }) {
  const router = useRouter();
  useEffect(() => {
    const validate = async () => {
      const isValid = await validateUser(params.containerId[0]);
      // console.log('container: ', params.containerId[0]);
      // console.log("isvalid: ", isValid);
      if (!isValid) {
        console.log(
          "Invalid user or container OR this container is not allocated to this user."
        );
        router.push('/');
      }
    };
    validate();
  }, [params]);

  return <div>My Post: {params.containerId}</div>;
}
