"use client";

import { useState, KeyboardEvent } from "react";
import { ArrowLeft, ArrowRight, RotateCw, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function BrowserComponent() {

  const [url, setUrl] = useState("");
  const [currentUrl, setCurrentUrl] = useState("");

  const handleSearch = () => {
    let searchUrl = url;
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      searchUrl = `https://${url}`;
    }
    setCurrentUrl(searchUrl);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col h-full p-1">
      <div className="flex items-center space-x-2 px-2 py-2 md:py-0 bg-muted/20">
        <Button variant="ghost" size="icon">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <ArrowRight className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <RotateCw className="h-4 w-4" />
        </Button>
        <Input
          className="flex-grow"
          placeholder="Enter URL or search..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button onClick={handleSearch}>
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>

      <div className="flex-grow md:px-3 md:py-2 p-1">
        <div className="rounded-lg border h-full">
          <iframe src={currentUrl} className="w-full h-full rounded-lg" title="web" />
        </div>
      </div>
    </div>
  );
}
