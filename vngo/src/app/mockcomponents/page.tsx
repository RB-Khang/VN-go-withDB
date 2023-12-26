import Button from '@/components/element/Button';

export default function MockingPage() {
    return (
        <div className="container mx-auto mt-20">
            <span className="mb-2">Component list </span>
            <div className="flex button gap-3">
                <div className="flex flex-col">
                    <Button title="Default" />
                    <span>Default button</span>
                </div>
                <div className="flex flex-col">
                    <Button type="primary" title="Primary" />
                    <span>Primary button</span>
                </div>
                <div className="flex flex-col">
                    <Button danger type="primary" title="Danger" />
                    <span>Danger button</span>
                </div>
                <div className="flex flex-col">
                    <Button disabled title="Disable" />
                    <span>Disable button</span>
                </div>
            </div>
        </div>
    );
}
