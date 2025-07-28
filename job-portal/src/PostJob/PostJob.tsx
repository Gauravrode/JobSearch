import SelectData from '../PostJob/SelectData';
import { fields } from '../Data/Data';
import { TagsInput } from '@mantine/core';
import TextEditor from './TextEditor';

const PostJob = () => {
    return (
        <div className="w-4/5 mx-auto py-10 space-y-6">
            <h2 className="text-2xl font-bold">Post a Job</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {fields.map((field, index) => (
                    <SelectData
                        key={index}
                        label={field.label}
                        placeholder={field.placeholder}
                        options={field.options}
                    />
                ))}
            </div>
            <TagsInput label="Skills" placeholder="Enter Skill" splitChars={[',', ' ', '|']} clearable acceptValueOnBlur />
            <div>
                <div className='text-gray-300 text-bold'>
                    Job Descrption
                </div>
                <TextEditor></TextEditor>
            </div>
        </div>
    );
};

export default PostJob;
