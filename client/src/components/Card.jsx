import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";

export default function Example() {
    return (
        <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
                <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="img-blur-shadow" />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    UI/UX Review Check
                </Typography>
                <Typography>
                    The place is close
                </Typography>
            </CardBody>
            <CardFooter className="pt-0 flex flex-row align-middle">
                <select className="mx-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700">
                    {Array.from(Array(6), (e, i) => {
                        return (
                            <option key={i + 1} value={i + 1}> {i + 1}</option>
                        )
                    })}
                </select>
                <select className="bg-blue-500 text-white p-2 rounded-lg mx-2 hover:bg-blue-700">
                    <option value="quater">Quater</option>
                    <option value="half">Half</option>
                    <option value="full">Full</option>
                </select>
                <h1 className="text-black text-lg m-2">Total Price</h1>
            </CardFooter>
        </Card>
    );
} 