import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

const EditButton = ({ experienceId }) => {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/manage-work-experience/edit/${experienceId}`); 
  };

  return (
    <Button variant="outline" onClick={handleEdit}>
      Edit
    </Button>
  );
};

export default EditButton;

