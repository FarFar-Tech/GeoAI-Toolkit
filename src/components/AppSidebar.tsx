import { Gem, Shield, Map, Database, Home, Satellite } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

const tools = [
  { title: "Dashboard", url: "/", icon: Home, badge: null },
  { title: "Mineral Prospectivity AI", url: "/mineral-prospectivity", icon: Gem, badge: "RAG" },
  { title: "Environmental Risk Screener", url: "/environmental-risk", icon: Shield, badge: "RAG" },
  { title: "Map Interpreter", url: "/map-interpreter", icon: Map, badge: "VLM" },
  { title: "Data Recommender", url: "/data-recommender", icon: Database, badge: "Tools" },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-sidebar-primary flex items-center justify-center">
              <Satellite className="h-4 w-4 text-sidebar-primary-foreground" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-sidebar-foreground">GTK GeoAI</h2>
              <p className="text-[10px] text-sidebar-foreground/60">Toolkit v1.0</p>
            </div>
          </div>
        )}
        {collapsed && (
          <div className="flex justify-center">
            <div className="h-8 w-8 rounded-lg bg-sidebar-primary flex items-center justify-center">
              <Satellite className="h-4 w-4 text-sidebar-primary-foreground" />
            </div>
          </div>
        )}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>AI Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {tools.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="hover:bg-sidebar-accent/50"
                      activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    >
                      <item.icon className="mr-2 h-4 w-4 shrink-0" />
                      {!collapsed && (
                        <span className="flex-1 flex items-center justify-between">
                          <span className="truncate">{item.title}</span>
                          {item.badge && (
                            <Badge variant="outline" className="ml-1 text-[9px] px-1 py-0 border-sidebar-border text-sidebar-foreground/60">
                              {item.badge}
                            </Badge>
                          )}
                        </span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        {!collapsed && (
          <div className="text-[10px] text-sidebar-foreground/40 space-y-1">
            <p>Powered by Lovable AI</p>
            <p>GTK Hakku Data Products</p>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
