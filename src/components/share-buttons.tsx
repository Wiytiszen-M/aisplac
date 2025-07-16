"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Twitter,
  Facebook,
  Linkedin,
  Share2,
  Copy,
  Check,
  MessageCircle,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ShareButtonsProps {
  title: string;
  slug: string;
}
export function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [baseURL, setBaseURL] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setBaseURL(window.location.origin);
    }
  }, []);

  const url = useMemo(() => {
    return baseURL ? `${baseURL}/novedades/${slug}` : "";
  }, [baseURL, slug]);

  const encodedTitle = useMemo(() => encodeURIComponent(title), [title]);
  const encodedUrl = useMemo(() => encodeURIComponent(url), [url]);

  const shareLinks = useMemo(() => {
    if (!encodedUrl) return [];

    return [
      {
        name: "Twitter",
        icon: <Twitter className="h-4 w-4" />,
        url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
        color: "bg-[#1DA1F2] hover:bg-[#1a94df] text-white",
      },
      {
        name: "Facebook",
        icon: <Facebook className="h-4 w-4" />,
        url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        color: "bg-[#4267B2] hover:bg-[#3b5998] text-white",
      },
      {
        name: "LinkedIn",
        icon: <Linkedin className="h-4 w-4" />,
        url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
        color: "bg-[#0077B5] hover:bg-[#006699] text-white",
      },
      {
        name: "WhatsApp",
        icon: <MessageCircle className="h-4 w-4" />,
        url: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
        color: "bg-[#25D366] hover:bg-[#20bd5a] text-white",
      },
    ];
  }, [encodedUrl, encodedTitle]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="flex flex-col space-y-4 pt-36">
      <h3 className="flex items-center text-lg font-medium">
        <Share2 className="mr-2 h-5 w-5" />
        Compartir este artículo
      </h3>
      {encodedUrl && (
        <div className="flex flex-wrap gap-2">
          <TooltipProvider>
            {shareLinks.map((link) => (
              <Tooltip key={link.name}>
                <TooltipTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    className={link.color}
                    onClick={() => window.open(link.url, "_blank")}
                  >
                    {link.icon}
                    <span className="ml-2">{link.name}</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Compartir en {link.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}

            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="sm" variant="outline" onClick={copyToClipboard}>
                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  <span className="ml-2">
                    {copied ? "¡Copiado!" : "Copiar enlace"}
                  </span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copiar enlace al portapapeles</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )}
    </div>
  );
}
