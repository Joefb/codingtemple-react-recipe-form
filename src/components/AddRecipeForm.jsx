import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    recipeName: "",
    servings: "",
    description: "",
    difficulty: "",
    catagory: "",
    cuisineType: "",
    image: "",
    ingredients: [],
    ingrediantName: "",
    quanity: 0,
    measurementUnit: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prevState => ({ ...prevState, [name]: value }));
  }

  const handleIngrediantAdd = () => {
    const newIngredient = {
      name: formData.ingrediantName,
      quanity: formData.quanity,
      measurementUnit: formData.measurementUnit,
    }

    setFormData(prevState => ({
      ...prevState, ingredients: [...prevState.ingredients, newIngredient]
    }))
  }



  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Add Recipe
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nom nom nom!! Add your recipe here!
      </Typography>
      <div className="flex justify-evenly">
        <form className="mt-8 mb-2 w-80 sm:w-96 lg:w-1/2">
          {/* <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"> */}
          {/* <form className="mt-8 mb-2 w-1/2"> */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 justify-between">
              <div>
                <p>Recipe Name:</p>
                <input
                  className="border border-black"
                  type="text"
                  placeholder="Recipe Name"
                  name="recipeName"
                  minLength={3}
                  maxLength={50}
                  required
                  value={formData.recipeName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <p>Servings:</p>
                <input
                  className="border border-black"
                  type="number"
                  placeholder="Servings"
                  name="servings"
                  minLength={1}
                  maxLength={20}
                  required
                  value={formData.servings}
                  onChange={handleChange}
                />
              </div>
              <div>
                <p>Description:</p>
                <textarea
                  className="border border-black h-16 w-full"
                  placeholder="Enter Description..."
                  name="description"
                  minLength={10}
                  maxLength={500}
                  required
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <div>
                <p>Difficulty:</p>
                <select
                  className="border border-black"
                  name="difficulty"
                  value={formData.difficulty}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>

              <div>
                <p>Catagory:</p>
                <select
                  className="border border-black"
                  name="catagory"
                  value={formData.catagory}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="appetizer">Appatizer</option>
                  <option value="mainCourse">Main Course</option>
                  <option value="desert">Desert</option>
                  <option value="sideDish">Side Dish</option>
                  <option value="beverage">Beverage</option>
                </select>
              </div>

              <div>
                <p>Cuisine Type</p>
                <select
                  className="border border-black"
                  name="cuisineType"
                  value={formData.cuisineType}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="american">American</option>
                  <option value="italian">Italian</option>
                  <option value="mexican">Mexican</option>
                  <option value="asian">Asian</option>
                  <option value="mediterranean">Mediterranen</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label>Enter Image URL(optional)</label>
              <input
                className="border border-black"
                type="url"
                name="image"
                placeholder="https://example.com/image.jpg"
                value={formData.image}
                onChange={handleChange}
              />
            </div>

            <div className="border-2 rounded-md border-black p-2">
              <p className="font-bold">Add Ingredients</p>
              <input
                className="border border-black m-1 w-16 p-1"
                name="quanity"
                type="number"
                placeholder="Enter quanity"
                value={formData.quanity}
                onChange={handleChange}
              />

              <select
                className="border border-black m-1 p-1"
                name="measurementUnit"
                value={formData.measurementUnit}
                onChange={handleChange}
              >
                <option value="">Select unit</option>
                <option value="cups">cups</option>
                <option value="tablespoons">tablespoons</option>
                <option value="teaspoons">teaspoons</option>
                <option value="grams">grams</option>
                <option value="ounces">ounces</option>
                <option value="pounds">pounds</option>
                <option value="pieces">pieces</option>
              </select>
              <span>of</span>
              <input
                className="border border-black m-1 p-1"
                name="ingrediantName"
                type="text"
                placeholder="Enter ingrediant name"
                value={formData.ingrediantName}
                onChange={handleChange}
              />
              <Button color="blue" size="sm" className="w-full h-16 mt-1" onClick={handleIngrediantAdd}>Add Ingrediant</Button>
            </div>
          </div>
        </form>
        <div className="flex flex-col border-2 rounded-md border-black mb-2 mt-4 p-4 w-1/3">
          <p className="font-bold">Ingredient List:</p>
          <ul>
            {formData.ingredients.map((ingredient, index) => (
              <div>
                <p>{ingredient.quanity} {ingredient.measurementUnit} of {ingredient.name}</p>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <Button className="mt-6 h-24" color="green" fullWidth>
        add recipe
      </Button>
    </Card >
  );
}

export default AddRecipeForm

// return (
//   <Card color="transparent" shadow={false}>
//     <Typography variant="h4" color="blue-gray">
//       Add Recipe
//     </Typography>
//     <Typography color="gray" className="mt-1 font-normal">
//       Nom nom nom!! Add your recipe here!
//     </Typography>
//     <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
//       {/* <form className="mt-8 mb-2 w-full max-w-2xl"> */}
//       <div className="mb-1 flex flex-col gap-6">
//         <Typography variant="h6" color="blue-gray" className="-mb-3">
//           Recipe Name
//         </Typography>
//         <Input
//           size="sm"
//           placeholder="name@mail.com"
//           className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//           labelProps={{
//             className: "before:content-none after:content-none",
//           }}
//         />
//         <Typography variant="h6" color="blue-gray" className="-mb-3">
//           Your Email
//         </Typography>
//         <Input
//           size="lg"
//           placeholder="name@mail.com"
//           className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//           labelProps={{
//             className: "before:content-none after:content-none",
//           }}
//         />
//         <Typography variant="h6" color="blue-gray" className="-mb-3">
//           Password
//         </Typography>
//         <Input
//           type="password"
//           size="lg"
//           placeholder="********"
//           className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//           labelProps={{
//             className: "before:content-none after:content-none",
//           }}
//         />
//       </div>
//       <Checkbox
//         label={
//           <Typography
//             variant="small"
//             color="gray"
//             className="flex items-center font-normal"
//           >
//             I agree the
//             <a
//               href="#"
//               className="font-medium transition-colors hover:text-gray-900"
//             >
//               &nbsp;Terms and Conditions
//             </a>
//           </Typography>
//         }
//         containerProps={{ className: "-ml-2.5" }}
//       />
//       <Button className="mt-6" fullWidth>
//         add recipe
//       </Button>
//     </form>
//   </Card>
// );
//
