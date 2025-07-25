import { Button, TextInput } from "@mantine/core";

const Subscribe = () => {



    return (
        <div className="mt-20 flex items-center bg-gray-800 mx-20 p-5 rounded-xl gap-20 justify-around">
            <div className="text-4xl font-semibold text-yellow-100 mb-3 text-center">
                Never wants to miss any <span className="text-yellow-500">Job news!!</span>
            </div>
            <div className="flex gap-3 bg-gray-500 p-2 rounded-lg">
                <TextInput className="[&_input]:text-gray-900 font-semibold"
                    variant="unstyled"
                    placeholder="your@email.com"
                />
                <Button size="lg" color="yellow" variant="filled">Button</Button>
            </div>
        </div>

    );



}

export default Subscribe;