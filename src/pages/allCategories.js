import CategoriesMini from "../components/categoriesMini";
import { Link } from "react-router-dom";

const AllCategories = () => {
  const categories = [
    { label: "Architecture", link: "architecture" },
    { label: "Art Instruction", link: "art__art_instruction" },
    { label: "Art History", link: "history_of_art__art__design_styles" },
    { label: "Dance", link: "dance" },
    { label: "Design", link: "design" },
    { label: "Fashion", link: "fashion" },
    { label: "Film", link: "film" },
    { label: "Graphic Design", link: "graphic_design" },
    { label: "Music", link: "music" },
    { label: "Music Theory", link: "music_theory" },
    { label: "Painting", link: "painting__paintings" },
    { label: "Photography", link: "photography" },
    { label: "Bears", link: "bears" },
    { label: "Cats", link: "cats" },
    { label: "Kittens", link: "kittens" },
    { label: "Dogs", link: "dogs" },
    { label: "Puppies", link: "puppies" },
    { label: "Fantasy", link: "fantasy" },
    { label: "Historical Fiction", link: "historical_fiction" },
    { label: "Horror", link: "horror" },
    { label: "Humor", link: "humor" },
    { label: "Literature", link: "literature" },
    { label: "Mystery/Detectives", link: "mystery_and_detective_stories" },
    { label: "Plays", link: "plays" },
    { label: "Poetry", link: "poetry" },
    { label: "Romance", link: "romance" },
    { label: "Sci-Fi", link: "science_fiction" },
    { label: "Short Stories", link: "short_stories" },
    { label: "Thriller", link: "thriller" },
    { label: "Young Adult", link: "young_adult_fiction" },
    { label: "Biology", link: "biology" },
    { label: "Chemistry", link: "chemistry" },
    { label: "Mathematics", link: "mathematics" },
    { label: "Physics", link: "physics" },
    { label: "Programming", link: "programming" },
    { label: "Management", link: "management" },
    { label: "Entrepreneurship", link: "entrepreneurship" },
    { label: "Business Economics", link: "business__economics" },
    { label: "Business Success", link: "success_in_business" },
    { label: "Finance", link: "finance" },
    { label: "History", link: "history" },
    { label: "Anthropology", link: "anthropology" },
    { label: "Religion", link: "religion" },
    { label: "Political Science", link: "political_science" },
    { label: "Psychology", link: "psychology" },
  ];
  return (
    <div>
      <CategoriesMini categories={categories}></CategoriesMini>
      <Link to="/">Back</Link>
    </div>
  );
};

export default AllCategories;
