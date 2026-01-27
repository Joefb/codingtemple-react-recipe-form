import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const AddRecipeForm = () => {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Add Recipe
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nom nom nom!! Add your recipe here!
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        {/* <form className="mt-8 mb-2 w-full max-w-2xl"> */}
        <div className="flex flex-col gap-6">
          <div>
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
              />
            </div>
          </div>

          <div>
            <div>
              <p>Difficulty:</p>
              <select
                className="border border-black"
                name="difficulty"
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
            />
          </div>

          <div>
            <p>Ingredients</p>
          </div>
        </div>

        <Button className="mt-6" fullWidth>
          add recipe
        </Button>
      </form>
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
