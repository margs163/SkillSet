import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../components/ui/sidebar";

import {
  Home,
  Inbox,
  Calendar,
  Search,
  Settings,
  Book,
  BookOpen,
  Shapes,
} from "lucide-react";

const itemsMain = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },

  {
    title: "FlashCards",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Quizzes",
    url: "#",
    icon: Search,
  },
];

const itemsCollections = [
  {
    title: "Mechanics",
    url: "#",
    icon: <Shapes className="text-green-500" />,
  },

  {
    title: "Kinematics",
    url: "#",
    icon: <Shapes className="text-blue-500" />,
  },
  {
    title: "Optics",
    url: "#",
    icon: <Shapes className="text-red-500" />,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible={"offcanvas"} className="font-roboto">
      <SidebarHeader className="flex flex-row items-center justify-start gap-2 py-3.5 px-6">
        <BookOpen
          size={24}
          className="text-white bg-violet-500 p-2 shrink-0 box-content rounded-md"
        />
        <h3 className="text-xl font-semibold">OquEasy</h3>
      </SidebarHeader>
      <hr className="w-full h-[2px] bg-gray-300" />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className={"uppercase text-xs"}>
            Main
          </SidebarGroupLabel>
          <SidebarGroupContent className={"px-4"}>
            <SidebarMenu>
              {itemsMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className={"uppercase text-xs"}>
            Collections
          </SidebarGroupLabel>
          <SidebarGroupContent className={"px-4"}>
            <SidebarMenu>
              {itemsCollections.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
