import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export default function Example(props) {
    let options = props.options;
    let priceOptions = Object.keys(options);

    return (
        <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
                <img src={props.imgSrc} alt="img-blur-shadow" />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {props.foodName}
                </Typography>
                <Typography>The place is close</Typography>
            </CardBody>
            <CardFooter className="pt-0 flex flex-row align-middle">
                <select className="mx-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700">
                    {Array.from(Array(6), (e, i) => (
                        <option key={i + 1} value={i + 1}>
                            {i + 1}
                        </option>
                    ))}
                </select>
                <select className="bg-blue-500 text-white p-2 rounded-lg mx-2 hover:bg-blue-700">
                    {priceOptions.map((data, index) => (
                        <option key={index} value={data}>
                            {data}
                        </option>
                    ))}
                </select>
                <h1 className="text-black text-lg m-2">Total Price</h1>
            </CardFooter>
            <Button className="w-fit mx-auto mb-[100px] mt-[20px]">Add To Card</Button>
        </Card>
    );
}
