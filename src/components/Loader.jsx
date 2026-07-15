import { Spinner } from "@/components/ui/spinner";

const Loader = () => {
  return (
    <div className="flex h-96 items-center justify-center">
      <Spinner className="size-8 text-primary" />
    </div>
  );
};

export default Loader;