"use client";

import { validateUser } from "@/app/actions/validatePlayground";
import { Topbar } from "@/components/Topbar";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Code2 } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { containerId: string } }) {
  const [loading, setLoading] = useState(true); // Corrected 'loding' to 'loading'
  const router = useRouter();

  useEffect(() => {
    const validate = async () => {
      const isValid = await validateUser(params.containerId[0]);
      if (!isValid) {
        console.log(
          "Invalid user or container OR this container is not allocated to this user."
        );
        router.push('/');
      } else setLoading(false);
    };
    validate();
  }, [params]);

  const items = [
    {
      title: "VS Code",
      icon: <img src="/vscode.png" className="" alt="VS" />,
      href: "#",
    },
    {
      title: "Terminal",
      icon: <img src="/terminal.png" className="" alt="VS" />,
      href: "#",
    },
  ];

  if (loading) { // Corrected 'loding' to 'loading'
    return <>Loading</>;
  } else {
    return (
      <>
        <div className="bg-macOS-catalina-dark bg-cover bg-center min-h-screen flex flex-col justify-between">
          <div className="fixed top-0 mx-auto my-auto flex bg-primary/10 w-full">
            <Topbar />
          </div>

          <div></div>

          <div className="fixed bottom-0 mb-2 mx-auto flex justify-center flex-col w-full">
            <FloatingDock items={items} />
          </div>
        </div>
      </>
    );
  }
}
