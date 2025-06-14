// "use client";

// // React Imports
// import { useEffect } from "react";

// // Third-party Imports
// import { MoonStar, Sun } from "lucide-react";
// import { useTheme } from "next-themes";

// // Hook Imports
// // import type { Mode } from "@/contexts/settingsContext";
// // import { useSettings } from "@/hooks/useSettings";
// // Component Imports
// import { Button } from "@/registry/new-york/ui/button";

// const ModeToggle = () => {
//   // Hooks
//   const { setTheme } = useTheme();
//   const { settings, updateSettings } = useSettings();

//   const handleClick = () => {
//     const newMode: Mode = settings.mode === "dark" ? "light" : "dark";

//     // Ensure both themes exist before switching
//     const updatedSettings = {
//       ...settings,
//       mode: newMode,
//       theme: {
//         ...settings.theme,
//         styles: {
//           light: settings.theme.styles?.light || {},
//           dark: settings.theme.styles?.dark || {},
//         },
//       },
//     };

//     // Update settings first
//     updateSettings(updatedSettings);

//     // Then update next-themes
//     setTheme(newMode);
//   };

//   useEffect(() => {
//     if (settings.mode) {
//       setTheme(settings.mode);
//     }
//   }, [settings.mode, setTheme]);

//   return (
//     <Button
//       variant="outline"
//       size="icon"
//       className="cursor-pointer"
//       onClick={handleClick}
//     >
//       {settings.mode === "dark" ? (
//         <Sun className="size-5" />
//       ) : (
//         <MoonStar className="size-5" />
//       )}
//       <span className="sr-only">Toggle Theme</span>
//     </Button>
//   );
// };

// export default ModeToggle;
