import { Button, ButtonGroup } from 'react-bootstrap';

const CATEGORIES = ['All', 'Tech', 'Health', 'Science', 'Business', 'Sports', 'World'];

function CategoryFilter({ active, onChange }) {
    return (
        <div className="my-4">
            <ButtonGroup className="flex-wrap gap-1">
                {CATEGORIES.map(cat => (
                    <Button
                        key={cat}
                        size="sm"
                        variant={active === cat ? 'dark' : 'outline-secondary'}
                        onClick={() => onChange(cat)}
                    >
                        {cat}
                    </Button>
                ))}
            </ButtonGroup>
        </div>
    );
}
export default CategoryFilter;