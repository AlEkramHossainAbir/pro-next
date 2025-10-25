import Button from "@/app/components/Button";

export default function Settings() {
  console.log("Settings page loaded");
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-3xl">Settings</h1>
      <p className="mt-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed harum soluta magnam. Nulla odit eum alias delectus impedit voluptate ut ex? Incidunt nihil harum voluptates aspernatur natus molestiae veniam alias?</p>
      <Button>Go to Analytics</Button>
    </div>
  );
}
