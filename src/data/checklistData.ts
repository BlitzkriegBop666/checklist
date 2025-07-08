import type { ChecklistBlock } from '../types/checklist';

export const initialChecklistBlocks: ChecklistBlock[] = [
  {
    id: 'introduction',
    title: 'Знакомство',
    isCollapsed: false,
    items: [
      {
        id: 'meeting-format',
        text: 'Формат встречи, рассказать о Точке',
        completed: false
      },
      {
        id: 'team-introduction',
        text: 'Представить команду',
        completed: false
      },
      {
        id: 'agenda-overview',
        text: 'Обзор повестки дня',
        completed: false
      },
      {
        id: 'expectations',
        text: 'Обсудить ожидания от встречи',
        completed: false
      }
    ]
  },
  {
    id: 'preparation',
    title: 'Подготовка к встрече',
    isCollapsed: true,
    items: [
      {
        id: 'materials-check',
        text: 'Проверить материалы для презентации',
        completed: false
      },
      {
        id: 'tech-setup',
        text: 'Настроить техническое оборудование',
        completed: false
      },
      {
        id: 'room-preparation',
        text: 'Подготовить помещение для встречи',
        completed: false
      },
      {
        id: 'participant-list',
        text: 'Подтвердить список участников',
        completed: false
      }
    ]
  },
  {
    id: 'presentation',
    title: 'Презентация',
    isCollapsed: true,
    items: [
      {
        id: 'company-overview',
        text: 'Рассказать о компании',
        completed: false
      },
      {
        id: 'product-demo',
        text: 'Демонстрация продукта',
        completed: false
      },
      {
        id: 'benefits-explanation',
        text: 'Объяснить преимущества',
        completed: false
      },
      {
        id: 'case-studies',
        text: 'Показать кейсы клиентов',
        completed: false
      }
    ]
  },
  {
    id: 'discussion',
    title: 'Обсуждение и вопросы',
    isCollapsed: true,
    items: [
      {
        id: 'questions-session',
        text: 'Сессия вопросов и ответов',
        completed: false
      },
      {
        id: 'concerns-address',
        text: 'Обсудить возможные опасения',
        completed: false
      },
      {
        id: 'customization-options',
        text: 'Рассказать о возможностях кастомизации',
        completed: false
      },
      {
        id: 'pricing-discussion',
        text: 'Обсуждение ценообразования',
        completed: false
      }
    ]
  },
  {
    id: 'next-steps',
    title: 'Следующие шаги',
    isCollapsed: true,
    items: [
      {
        id: 'follow-up-plan',
        text: 'Составить план дальнейших действий',
        completed: false
      },
      {
        id: 'timeline-agreement',
        text: 'Согласовать временные рамки',
        completed: false
      },
      {
        id: 'contact-exchange',
        text: 'Обменяться контактами',
        completed: false
      },
      {
        id: 'meeting-summary',
        text: 'Подвести итоги встречи',
        completed: false
      }
    ]
  }
];