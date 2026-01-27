import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

// Will need props, img source, recipe name, description
// Destructure props
// When card is clicked, it will take to recipe details page
// Will need to create a details page component, maybe like a pop up.

const RecipeCard = (props) => {
  const { imgSrc, recipeName, description } = props;

  return (
    <Card className="mt-24 w-72">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          // src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
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
      </CardBody>
      <CardFooter className="pt-0">
        <Button>See Recipe</Button>
      </CardFooter>
    </Card>
  )
}

export default RecipeCard
