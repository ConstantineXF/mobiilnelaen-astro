// Файл: src/components/FaqAccordion.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion.tsx'; // Импортируем стилизованный компонент

// Определяем, какую структуру данных мы ожидаем
interface FaqItem {
  question: string;
  answer: any[]; // Тип 'any' для Sanity Block Content
}

interface Props {
  items: FaqItem[];
}

// Sanity Block Content рендерер (очень упрощенный)
function BlockContent({ blocks }: { blocks: any[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((block, index) => {
        if (block._type === 'block' && block.children) {
          return (
            <p key={index}>
              {block.children.map((child: any) => child.text).join('')}
            </p>
          );
        }
        return null;
      })}
    </div>
  );
}

export default function FaqAccordion({ items }: Props) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem value={`item-${index}`} key={index}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>
            <BlockContent blocks={item.answer} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}