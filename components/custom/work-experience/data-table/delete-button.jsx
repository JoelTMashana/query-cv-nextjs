import { Button } from "@/components/ui/button";
import useWorkExperienceStore from "@/store/useWorkExperienceStore";
import { deleteWorkExperience } from "@/services/workExperienceService";

const DeleteButton = ({ experienceId }) => {
  const deleteExperience = useWorkExperienceStore((state) => state.deleteExperience);

  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this experience?");
    if (confirmed) {
      try {
        await deleteWorkExperience(experienceId); 
        deleteExperience(experienceId);
      } catch (error) {
        console.error('Error deleting the experience:', error);
      }
    }
  };

  return (
    <Button variant="outline" onClick={handleDelete}>
      Delete
    </Button>
  );
};

export default DeleteButton;
