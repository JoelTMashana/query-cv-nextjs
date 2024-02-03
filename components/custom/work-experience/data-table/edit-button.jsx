import { Button } from "@/components/ui/button";
import useWorkExperienceStore from "@/store/useWorkExperienceStore";
import { useRouter } from 'next/navigation';

const EditButton = ({ experienceId }) => {
  const setEditingId = useWorkExperienceStore((state) => state.setEditingId);
  const router = useRouter();

  const handleEdit = () => {
    setEditingId(experienceId);
    router.push('/upload-workexperience/manual-entry'); 
  };

  return (
    <Button variant="outline" onClick={handleEdit}>
      Edit
    </Button>
  );
};

export default EditButton;

