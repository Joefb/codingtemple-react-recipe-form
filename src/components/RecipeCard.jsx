import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const RecipeCard = (props) => {
  const { setRecipeIndex, onAddRecipeClick, index, imgSrc, recipeName, description, servings, difficulty, catagory, cuisineType, recipesData, setRecipesData } = props;

  const handleDelete = () => {
    setRecipesData(prevState => prevState.filter((item, idx) => idx !== index))
  }

  return (
    <Card className="mt-24 w-72">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={imgSrc}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {recipeName}
        </Typography>
        <Typography>
          {description}
        </Typography>
        <div className="my-2 h-px w-full bg-blue-gray-100" />
        <Typography variant="small" color="gray" className="mb-1">
          <span className="font-bold">Servings:</span> {servings}
        </Typography>
        <Typography variant="small" color="gray" className="mb-1">
          <span className="font-bold">Difficultly:</span> {difficulty}
        </Typography>
        <Typography variant="small" color="gray" className="mb-1">
          <span className="font-bold">Catagory:</span> {catagory}
        </Typography>
        <Typography variant="small" color="gray" className="mb-1">
          <span className="font-bold">Cuisine Type</span>: {cuisineType}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 flex flex-col justify-center">
        <Button color="blue" onClick={() => {
          onAddRecipeClick()
          setRecipeIndex(index)
        }}>See Recipe</Button>
        <Button color="red" fullWidth className="mt-3" onClick={handleDelete}>Delete Recipe</Button>
      </CardFooter>
    </Card >
  )
}

export default RecipeCard
