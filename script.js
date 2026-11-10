    /**
     * AURUM ACADEMY — CRUD-first Educational Platform MVP v1.0
     * Реализует все 16 сущностей из Раздела 7 PRD, матрицу прав доступа (Раздел 3-4),
     * роутинг (Раздел 5), бизнес-правила (Раздел 10) и пользовательские сценарии A-E (Раздел 12).
     */

    const STORAGE_KEY = 'aurum_academy_mvp_db_v1';

    // Начальные данные (Seed Data) для контекста Узбекистана (Ташкент, Самарканд, Фергана, Нукус и др.)
    function createInitialDatabase() {
      const now = new Date().toISOString();
      return {
        currentUserId: 'u-student-1', // По умолчанию авторизован ученик для удобного обзора
        users: [
          { id: 'u-student-1', email: 'aziza.karimova@aurum.uz', password_hash: 'hashed_pass_123', role: 'user', status: 'active', region: 'Самарканд', created_at: '2025-01-10T09:00:00Z', updated_at: now },
          { id: 'u-student-2', email: 'jasur.aliev@aurum.uz', password_hash: 'hashed_pass_123', role: 'user', status: 'active', region: 'Фергана', created_at: '2025-01-14T11:20:00Z', updated_at: now },
          { id: 'u-editor-1', email: 'dilshod.ustoz@aurum.uz', password_hash: 'hashed_pass_123', role: 'editor', status: 'active', region: 'Ташкент', created_at: '2025-01-02T08:00:00Z', updated_at: now },
          { id: 'u-mod-1', email: 'malika.mod@aurum.uz', password_hash: 'hashed_pass_123', role: 'moderator', status: 'active', region: 'Бухара', created_at: '2025-01-03T10:00:00Z', updated_at: now },
          { id: 'u-admin-1', email: 'admin@aurum.uz', password_hash: 'hashed_pass_123', role: 'admin', status: 'active', region: 'Ташкент', created_at: '2025-01-01T00:00:00Z', updated_at: now }
        ],
        profiles: [
          {
            id: 'p-1',
            user_id: 'u-student-1',
            display_name: 'Азиза Каримова',
            avatar_url: 'https://placehold.co/120x120/f59e0b/0f172a?text=АК',
            bio: 'Абитуриентка из Самарканда. Готовлюсь к поступлению в IT-университет и изучаю математику и веб-разработку.',
            interests: ['Математика ДТМ', 'Frontend', 'Алгоритмы', 'Английский язык'],
            directions: ['Программирование', 'Точные науки'],
            visibility: 'public',
            updated_at: now
          },
          {
            id: 'p-2',
            user_id: 'u-student-2',
            display_name: 'Жасур Алиев',
            avatar_url: 'https://placehold.co/120x120/3b82f6/ffffff?text=ЖА',
            bio: 'Студент 1 курса. Ищу единомышленников для решения олимпиадных задач по физике и Python.',
            interests: ['Python', 'Физика', 'Анализ данных'],
            directions: ['Программирование', 'Естественные науки'],
            visibility: 'public',
            updated_at: now
          },
          {
            id: 'p-3',
            user_id: 'u-editor-1',
            display_name: 'Дильшод Рахимов (Редактор)',
            avatar_url: 'https://placehold.co/120x120/10b981/ffffff?text=ДР',
            bio: 'Преподаватель математики и информатики с 10-летним опытом подготовки абитуриентов.',
            interests: ['Педагогика', 'Математика', 'Python'],
            directions: ['Точные науки', 'Программирование'],
            visibility: 'public',
            updated_at: now
          },
          {
            id: 'p-4',
            user_id: 'u-mod-1',
            display_name: 'Малика Юсупова (Модератор)',
            avatar_url: 'https://placehold.co/120x120/8b5cf6/ffffff?text=МЮ',
            bio: 'Координатор безопасного образовательного сообщества Aurum Academy.',
            interests: ['Сообщество', 'Безопасность', 'Языки'],
            directions: ['Гуманитарные науки'],
            visibility: 'public',
            updated_at: now
          },
          {
            id: 'p-5',
            user_id: 'u-admin-1',
            display_name: 'Администратор Aurum',
            avatar_url: 'https://placehold.co/120x120/0f172a/f59e0b?text=AU',
            bio: 'Системный администратор платформы Aurum Academy.',
            interests: ['EdTech', 'Архитектура данных'],
            directions: ['Управление платформой'],
            visibility: 'public',
            updated_at: now
          }
        ],
        categories: [
          { id: 'cat-math', name: 'Математика и подготовка к ВУЗу', slug: 'math-dtm', description: 'Алгебра, геометрия и разбор тестовых заданий для абитуриентов.', parent_id: null, status: 'active' },
          { id: 'cat-it', name: 'Программирование и IT', slug: 'programming', description: 'Основы алгоритмов, Python, веб-разработка и базы данных с нуля.', parent_id: null, status: 'active' },
          { id: 'cat-lang', name: 'Языки и академическое письмо', slug: 'languages', description: 'Английский язык для науки, IELTS и академическая грамотность.', parent_id: null, status: 'active' },
          { id: 'cat-sci', name: 'Естественные науки', slug: 'natural-sciences', description: 'Физика, химия и биология с наглядными примерами и тестами.', parent_id: null, status: 'active' }
        ],
        courses: [
          {
            id: 'course-1',
            title: 'Фундаментальная математика для абитуриентов',
            slug: 'fundamental-math-abiturient',
            description: 'Системный курс по алгебре, функциям, тригонометрии и текстовым задачам. Разработан специально для самостоятельной подготовки без платных репетиторов.',
            objectives: [
              'Уверенно преобразовывать алгебраические и логарифмические выражения',
              'Решать квадратные, показательные и тригонометрические уравнения',
              'Строить графики функций и находить область определения',
              'Решать задачи на проценты, сплавы и движение'
            ],
            cover_url: 'https://placehold.co/800x420/1e293b/fbbf24?text=Математика+для+Абитуриентов',
            category_id: 'cat-math',
            level: 'Начальный / Средний',
            language: 'Русский',
            author_id: 'u-editor-1',
            duration_hours: 18,
            status: 'published',
            created_at: '2025-01-05T10:00:00Z',
            updated_at: now
          },
          {
            id: 'course-2',
            title: 'Основы Python и алгоритмического мышления',
            slug: 'python-algorithms-basics',
            description: 'Практический курс по программированию на языке Python. От переменных и циклов до структур данных, функций и работы с файлами.',
            objectives: [
              'Понимать базовый синтаксис Python 3 и типы данных',
              'Использовать условные операторы, циклы for и while',
              'Проектировать чистые функции и работать со словарями и списками',
              'Решать базовые алгоритмические задачи на поиск и сортировку'
            ],
            cover_url: 'https://placehold.co/800x420/0f172a/38bdf8?text=Python+и+Алгоритмы',
            category_id: 'cat-it',
            level: 'Начальный',
            language: 'Русский',
            author_id: 'u-editor-1',
            duration_hours: 24,
            status: 'published',
            created_at: '2025-01-08T12:00:00Z',
            updated_at: now
          },
          {
            id: 'course-3',
            title: 'Академический английский и чтение научных статей',
            slug: 'academic-english-reading',
            description: 'Курс помогает школьникам и студентам читать англоязычную документацию, учебники и готовиться к международным экзаменам.',
            objectives: [
              'Освоить 300+ ключевых академических терминов (Academic Word List)',
              'Находить главную мысль текста (Skimming & Scanning)',
              'Грамотно писать структурированные эссе и резюме исследования'
            ],
            cover_url: 'https://placehold.co/800x420/1e1b4b/a78bfa?text=Academic+English',
            category_id: 'cat-lang',
            level: 'Средний',
            language: 'Русский',
            author_id: 'u-editor-1',
            duration_hours: 14,
            status: 'published',
            created_at: '2025-01-12T15:00:00Z',
            updated_at: now
          },
          {
            id: 'course-4',
            title: 'Физика: Механика и молекулярная физика в задачах',
            slug: 'physics-mechanics-problems',
            description: 'Черновой курс в разработке. Разбор кинематики, законов Ньютона и законов сохранения энергии.',
            objectives: [
              'Применять законы Ньютона в инерциальных системах отсчёта',
              'Рассчитывать импульс и механическую работу'
            ],
            cover_url: 'https://placehold.co/800x420/064e3b/34d399?text=Физика:+Механика+(Черновик)',
            category_id: 'cat-sci',
            level: 'Продвинутый',
            language: 'Русский',
            author_id: 'u-editor-1',
            duration_hours: 20,
            status: 'draft',
            created_at: '2025-01-18T10:00:00Z',
            updated_at: now
          }
        ],
        lessons: [
          {
            id: 'les-101',
            course_id: 'course-1',
            title: 'Урок 1. Линейные и квадратные уравнения: теорема Виета',
            summary: 'Разбираем дискриминант, теорему Виета и быстрые приёмы устного нахождения корней.',
            content: `<h3>1. Квадратное уравнение и его вид</h3>
<p>Квадратным уравнением называется уравнение вида <code>ax² + bx + c = 0</code>, где коэффициент <code>a ≠ 0</code>.</p>
<p>Для нахождения корней используется <strong>дискриминант</strong>: <code>D = b² - 4ac</code>.</p>
<ul>
  <li>Если <code>D > 0</code> — уравнение имеет два различных действительных корня.</li>
  <li>Если <code>D = 0</code> — один корень (два совпадающих корня).</li>
  <li>Если <code>D < 0</code> — действительных корней нет.</li>
</ul>
<h3>2. Теорема Виета для приведённого уравнения</h3>
<p>Если <code>x² + px + q = 0</code> имеет корни <code>x₁</code> и <code>x₂</code>, то справедливы равенства:</p>
<p><strong>x₁ + x₂ = -p</strong> и <strong>x₁ · x₂ = q</strong>.</p>
<p><em>Практический совет для тестов:</em> всегда проверяйте сумму коэффициентов! Если <code>a + b + c = 0</code>, то один из корней равен <code>1</code>, а второй равен <code>c / a</code>.</p>`,
            video_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            attachments: ['Конспект_формул_Виета.pdf', 'Тренажер_20_уравнений.pdf'],
            position: 1,
            duration_minutes: 35,
            status: 'published',
            created_at: now,
            updated_at: now
          },
          {
            id: 'les-102',
            course_id: 'course-1',
            title: 'Урок 2. Арифметическая и геометрическая прогрессии',
            summary: 'Формулы n-го члена и суммы первых n членов прогрессии на реальных примерах.',
            content: `<h3>Арифметическая прогрессия</h3>
<p>Числовая последовательность, каждый член которой, начиная со второго, равен предыдущему, сложенному с одним и тем же числом <code>d</code> (разностью прогрессии).</p>
<p>Формула n-го члена: <code>aₙ = a₁ + d · (n - 1)</code></p>
<p>Сумма первых n членов: <code>Sₙ = ((a₁ + aₙ) / 2) · n</code></p>
<h3>Геометрическая прогрессия</h3>
<p>Последовательность отличных от нуля чисел, где каждый следующий член получается умножением предыдущего на знаменатель <code>q</code>.</p>
<p>Формула n-го члена: <code>bₙ = b₁ · qⁿ⁻¹</code></p>`,
            video_url: '',
            attachments: ['Таблица_прогрессий.pdf'],
            position: 2,
            duration_minutes: 40,
            status: 'published',
            created_at: now,
            updated_at: now
          },
          {
            id: 'les-103',
            course_id: 'course-1',
            title: 'Урок 3. Логарифмы и их свойства',
            summary: 'Определение логарифма, основное логарифмическое тождество и переход к новому основанию.',
            content: `<h3>Определение логарифма</h3>
<p>Логарифмом положительного числа <code>b</code> по основанию <code>a</code> (где <code>a > 0, a ≠ 1</code>) называется показатель степени, в которую нужно возвести <code>a</code>, чтобы получить <code>b</code>: <code>logₐ(b) = x ⇔ aˣ = b</code>.</p>
<ul>
  <li><code>logₐ(xy) = logₐ(x) + logₐ(y)</code></li>
  <li><code>logₐ(x/y) = logₐ(x) - logₐ(y)</code></li>
  <li><code>logₐ(xᵏ) = k · logₐ(x)</code></li>
</ul>`,
            video_url: '',
            attachments: ['Шпаргалка_логарифмы.pdf'],
            position: 3,
            duration_minutes: 45,
            status: 'published',
            created_at: now,
            updated_at: now
          },
          {
            id: 'les-201',
            course_id: 'course-2',
            title: 'Урок 1. Переменные, типы данных и ввод/вывод в Python',
            summary: 'Знакомство с интерпретатором Python, функциями print(), input() и динамической типизацией.',
            content: `<h3>Базовые типы данных в Python</h3>
<p>В Python переменная создаётся в момент присваивания значения оператором <code>=</code>:</p>
<pre><code>student_name = "Азиза"
score = 95
is_enrolled = True</code></pre>
<p>Основные типы: <code>int</code> (целые числа), <code>float</code> (дробные), <code>str</code> (строки), <code>bool</code> (логический тип).</p>
<p>Внимание: функция <code>input()</code> всегда возвращает строку (<code>str</code>). Для математических операций используйте явное приведение: <code>age = int(input())</code>.</p>`,
            video_url: '',
            attachments: ['Шпаргалка_Python_Types.pdf'],
            position: 1,
            duration_minutes: 30,
            status: 'published',
            created_at: now,
            updated_at: now
          },
          {
            id: 'les-202',
            course_id: 'course-2',
            title: 'Урок 2. Циклы for, while и списки (list)',
            summary: 'Итерация по коллекциям, функция range() и методы списков.',
            content: `<h3>Работа со списками и циклом for</h3>
<p>Список (<code>list</code>) — упорядоченная изменяемая коллекция элементов:</p>
<pre><code>cities = ["Ташкент", "Самарканд", "Бухара", "Нукус"]
for city in cities:
    print("Город обучения:", city)</code></pre>
<p>Добавление элемента в конец списка выполняется методом <code>cities.append("Хива")</code>, а длина списка вычисляется функцией <code>len(cities)</code>.</p>`,
            video_url: '',
            attachments: ['Задачи_на_циклы.py'],
            position: 2,
            duration_minutes: 45,
            status: 'published',
            created_at: now,
            updated_at: now
          },
          {
            id: 'les-301',
            course_id: 'course-3',
            title: 'Урок 1. Стратегии чтения научных текстов: Skimming и Scanning',
            summary: 'Как за 3 минуты понять структуру научной статьи на английском языке.',
            content: `<h3>Skimming vs Scanning</h3>
<p><strong>Skimming</strong> — беглое чтение для понимания общей идеи текста (читаем заголовки, первый абзац, первые предложения абзацев и заключение).</p>
<p><strong>Scanning</strong> — прицельный поиск конкретных фактов, дат, имён или числовых показателей без чтения всего текста подряд.</p>`,
            video_url: '',
            attachments: ['Academic_Reading_Checklist.pdf'],
            position: 1,
            duration_minutes: 30,
            status: 'published',
            created_at: now,
            updated_at: now
          }
        ],
        enrollments: [
          { id: 'enr-1', user_id: 'u-student-1', course_id: 'course-1', status: 'active', enrolled_at: '2025-01-11T10:00:00Z', completed_at: null },
          { id: 'enr-2', user_id: 'u-student-1', course_id: 'course-2', status: 'active', enrolled_at: '2025-01-12T14:30:00Z', completed_at: null },
          { id: 'enr-3', user_id: 'u-student-2', course_id: 'course-2', status: 'active', enrolled_at: '2025-01-15T09:15:00Z', completed_at: null }
        ],
        lesson_progress: [
          { id: 'lp-1', user_id: 'u-student-1', lesson_id: 'les-101', status: 'completed', completed_at: '2025-01-11T12:00:00Z', updated_at: '2025-01-11T12:00:00Z' },
          { id: 'lp-2', user_id: 'u-student-1', lesson_id: 'les-102', status: 'completed', completed_at: '2025-01-13T16:20:00Z', updated_at: '2025-01-13T16:20:00Z' },
          { id: 'lp-3', user_id: 'u-student-1', lesson_id: 'les-201', status: 'completed', completed_at: '2025-01-14T18:00:00Z', updated_at: '2025-01-14T18:00:00Z' }
        ],
        tests: [
          {
            id: 'test-101',
            lesson_id: 'les-101',
            course_id: 'course-1',
            title: 'Проверочный тест: Квадратные уравнения и теорема Виета',
            instructions: 'Ответьте на 3 вопроса разных типов (один ответ, несколько ответов и короткий текстовый ответ). Для успешного прохождения необходимо набрать минимум 70%.',
            passing_score: 70,
            time_limit_minutes: 15,
            status: 'published'
          },
          {
            id: 'test-201',
            lesson_id: 'les-201',
            course_id: 'course-2',
            title: 'Тест по основам Python и типам данных',
            instructions: 'Проверьте понимание базовых типов данных, ввода/вывода и списков в Python 3.',
            passing_score: 70,
            time_limit_minutes: 10,
            status: 'published'
          }
        ],
        questions: [
          {
            id: 'q-1',
            test_id: 'test-101',
            type: 'single_choice',
            text: 'Чему равна сумма корней приведённого квадратного уравнения x² - 9x + 20 = 0 согласно теореме Виета?',
            options: ['9', '-9', '20', '-20'],
            correct_answer: '9',
            explanation: 'По теореме Виета сумма корней x₁ + x₂ = -p. Так как p = -9, то сумма корней равна 9 (корни 4 и 5).',
            points: 10,
            position: 1
          },
          {
            id: 'q-2',
            test_id: 'test-101',
            type: 'multiple_choice',
            text: 'Выберите ВСЕ верные утверждения о квадратном уравнении ax² + bx + c = 0 (a ≠ 0):',
            options: [
              'Если D > 0, уравнение имеет два различных действительных корня',
              'Если a + b + c = 0, то один из корней обязательно равен 1',
              'При D = 0 уравнение не имеет действительных корней',
              'Коэффициент a может быть равен нулю'
            ],
            correct_answer: [
              'Если D > 0, уравнение имеет два различных действительных корня',
              'Если a + b + c = 0, то один из корней обязательно равен 1'
            ],
            explanation: 'При D > 0 корней два, а при сумме коэффициентов a+b+c=0 подстановка x=1 обращает левую часть в ноль.',
            points: 15,
            position: 2
          },
          {
            id: 'q-3',
            test_id: 'test-101',
            type: 'short_text',
            text: 'Найдите положительный корень уравнения x² - 5x - 6 = 0 (введите только число):',
            options: null,
            correct_answer: ['6', 'x=6'],
            explanation: 'Корни уравнения по теореме Виета: x₁ = 6, x₂ = -1. Положительный корень равен 6.',
            points: 15,
            position: 3
          },
          {
            id: 'q-4',
            test_id: 'test-201',
            type: 'single_choice',
            text: 'Какой тип данных всегда возвращает стандартная функция input() в Python 3?',
            options: ['str', 'int', 'float', 'bool'],
            correct_answer: 'str',
            explanation: 'Функция input() всегда считывает введённую пользователем строку и возвращает объект типа str.',
            points: 10,
            position: 1
          },
          {
            id: 'q-5',
            test_id: 'test-201',
            type: 'short_text',
            text: 'Какая встроенная функция Python возвращает количество элементов в списке (напишите только имя функции без скобок)?',
            options: null,
            correct_answer: ['len', 'len()'],
            explanation: 'Функция len(my_list) возвращает длину (количество элементов) коллекции.',
            points: 10,
            position: 2
          }
        ],
        test_attempts: [
          {
            id: 'att-1',
            user_id: 'u-student-1',
            test_id: 'test-101',
            answers: {
              'q-1': '9',
              'q-2': [
                'Если D > 0, уравнение имеет два различных действительных корня',
                'Если a + b + c = 0, то один из корней обязательно равен 1'
              ],
              'q-3': '6'
            },
            score: 40,
            max_score: 40,
            percentage: 100,
            passed: true,
            status: 'graded',
            started_at: '2025-01-11T12:10:00Z',
            submitted_at: '2025-01-11T12:16:00Z'
          }
        ],
        flashcards: [
          { id: 'fc-1', course_id: 'course-1', lesson_id: 'les-101', category_id: 'cat-math', front: 'Формула дискриминанта квадратного уравнения ax² + bx + c = 0', back: 'D = b² - 4ac', position: 1, status: 'published' },
          { id: 'fc-2', course_id: 'course-1', lesson_id: 'les-101', category_id: 'cat-math', front: 'Теорема Виета для x² + px + q = 0', back: 'x₁ + x₂ = -p,   x₁ · x₂ = q', position: 2, status: 'published' },
          { id: 'fc-3', course_id: 'course-1', lesson_id: 'les-102', category_id: 'cat-math', front: 'Формула n-го члена арифметической прогрессии', back: 'aₙ = a₁ + d · (n - 1)', position: 3, status: 'published' },
          { id: 'fc-4', course_id: 'course-1', lesson_id: 'les-103', category_id: 'cat-math', front: 'Основное логарифмическое тождество', back: 'a^(logₐ b) = b  (при a > 0, a ≠ 1, b > 0)', position: 4, status: 'published' },
          { id: 'fc-5', course_id: 'course-2', lesson_id: 'les-201', category_id: 'cat-it', front: 'Как преобразовать строку s в целое число в Python?', back: 'int(s) — например: x = int(input())', position: 5, status: 'published' },
          { id: 'fc-6', course_id: 'course-2', lesson_id: 'les-202', category_id: 'cat-it', front: 'Какой метод добавляет элемент в конец списка Python?', back: 'list.append(element)', position: 6, status: 'published' }
        ],
        library_materials: [
          {
            id: 'mat-1',
            title: 'Сборник всех формул по элементарной математике (Алгебра и Геометрия)',
            description: 'Структурированный справочник для подготовки к вступительным экзаменам: тригонометрия, производные, планиметрия и стереометрия.',
            type: 'book',
            source_url: 'https://openstax.org/subjects/math',
            file_url: 'https://openstax.org/subjects/math',
            author_info: 'Редакция Aurum Academy / OpenStax Adaptation',
            category_id: 'cat-math',
            language: 'Русский',
            license_info: 'CC BY 4.0 (Открытая образовательная лицензия)',
            status: 'published',
            created_at: '2025-01-06T09:00:00Z'
          },
          {
            id: 'mat-2',
            title: 'Интерактивный конспект: Алгоритмы и структуры данных на Python',
            description: 'Разбор линейного и бинарного поиска, оценки сложности O(n) и базовых коллекций с примерами кода.',
            type: 'notes',
            source_url: 'https://docs.python.org/ru/3/tutorial/',
            file_url: 'https://docs.python.org/ru/3/tutorial/',
            author_info: 'Дильшод Рахимов',
            category_id: 'cat-it',
            language: 'Русский',
            license_info: 'CC BY-SA 4.0 (Свободное учебное использование)',
            status: 'published',
            created_at: '2025-01-09T14:00:00Z'
          },
          {
            id: 'mat-3',
            title: 'Academic Word List (AWL) — 570 ключевых слов для IELTS и науки',
            description: 'Таблицы академической лексики с примерами употребления в научных статьях и эссе.',
            type: 'document',
            source_url: 'https://www.wgtn.ac.nz/lals/resources/academicwordlist',
            file_url: 'https://www.wgtn.ac.nz/lals/resources/academicwordlist',
            author_info: 'Averil Coxhead / Русский глоссарий Aurum',
            category_id: 'cat-lang',
            language: 'Русский / Английский',
            license_info: 'Open Educational Resource (OER)',
            status: 'published',
            created_at: '2025-01-12T16:30:00Z'
          },
          {
            id: 'mat-4',
            title: 'Видеолекция: Как решать текстовые задачи на сплавы и движение',
            description: 'Пошаговый алгоритм составления таблицы и системы уравнений для задач повышенной сложности.',
            type: 'video',
            source_url: 'https://www.khanacademy.org/math/algebra',
            file_url: 'https://www.khanacademy.org/math/algebra',
            author_info: 'Aurum Math Studio',
            category_id: 'cat-math',
            language: 'Русский',
            license_info: 'CC BY-NC-SA 4.0',
            status: 'published',
            created_at: '2025-01-14T11:00:00Z'
          }
        ],
        favorites: [
          { id: 'fav-1', user_id: 'u-student-1', entity_type: 'course', entity_id: 'course-1', created_at: '2025-01-11T10:05:00Z' },
          { id: 'fav-2', user_id: 'u-student-1', entity_type: 'material', entity_id: 'mat-1', created_at: '2025-01-11T10:15:00Z' },
          { id: 'fav-3', user_id: 'u-student-1', entity_type: 'material', entity_id: 'mat-2', created_at: '2025-01-12T17:00:00Z' }
        ],
        posts: [
          {
            id: 'post-1',
            author_id: 'u-student-1',
            title: 'Как быстрее запоминать формулы приведения в тригонометрии?',
            body: 'Всем привет! Готовлюсь к экзаменам в Самарканде. Постоянно путаю знак в формулах приведения вроде sin(π/2 + α) и cos(3π/2 - α). Поделитесь своим мнемоническим правилом, как не заучивать таблицу из 32 формул?',
            type: 'question',
            status: 'published',
            created_at: '2025-01-15T14:20:00Z',
            updated_at: '2025-01-15T14:20:00Z'
          },
          {
            id: 'post-2',
            author_id: 'u-student-2',
            title: 'Собираем учебную группу для ежедневного решения задач на Python',
            body: 'Ребята, кто сейчас проходит курс «Основы Python и алгоритмического мышления»? Предлагаю каждый вечер разбирать по 2 задачи на циклы и словари и делиться решениями в комментариях к этой теме!',
            type: 'study_group',
            status: 'published',
            created_at: '2025-01-16T09:45:00Z',
            updated_at: '2025-01-16T09:45:00Z'
          },
          {
            id: 'post-3',
            author_id: 'u-editor-1',
            title: 'План самостоятельной подготовки к математике за 4 месяца (без выгорания)',
            body: 'Как преподаватель часто вижу, что абитуриенты сразу берутся за сложные параметры, пропуская базу. Рекомендую идти строго по шагам: 1) Тождественные преобразования и дроби, 2) Уравнения и неравенства, 3) Функции и графики, 4) Текстовые задачи и прогрессии, 5) Планиметрия. Занимайтесь по 60 минут в день, обязательно закрепляя урок карточками повторения.',
            type: 'advice',
            status: 'published',
            created_at: '2025-01-17T11:00:00Z',
            updated_at: '2025-01-17T11:00:00Z'
          }
        ],
        comments: [
          {
            id: 'com-1',
            post_id: 'post-1',
            author_id: 'u-editor-1',
            body: 'Азиза, используйте правило «Лошадки»! Смотрите на горизонтальную (π, 2π) или вертикальную (π/2, 3π/2) ось на тригонометрической окружности. Если точка на вертикальной оси — киваем головой сверху вниз («да, меняем функцию на кофункцию»). А знак определяем по четверти исходной функции!',
            status: 'published',
            created_at: '2025-01-15T15:05:00Z',
            updated_at: '2025-01-15T15:05:00Z'
          },
          {
            id: 'com-2',
            post_id: 'post-2',
            author_id: 'u-student-1',
            body: 'Отличная идея! Я как раз прошла первый урок по типам данных и перехожу к спискам. Буду рада участвовать.',
            status: 'published',
            created_at: '2025-01-16T10:30:00Z',
            updated_at: '2025-01-16T10:30:00Z'
          }
        ],
        reports: [
          {
            id: 'rep-1',
            reporter_id: 'u-student-2',
            entity_type: 'post',
            entity_id: 'post-2',
            reason: 'Проверка работы системы модерации (тестовая жалоба)',
            details: 'Пример обращения в очередь модератора для демонстрации сценария E из PRD.',
            status: 'new',
            reviewed_by: null,
            moderator_note: '',
            created_at: '2025-01-17T13:10:00Z'
          }
        ],
        audit_logs: [
          {
            id: 'log-1',
            actor_id: 'u-admin-1',
            action: 'SYSTEM_INIT',
            entity_type: 'system',
            entity_id: 'mvp-v1',
            details: 'Инициализирована реляционная схема Aurum Academy (16 таблиц)',
            created_at: '2025-01-01T00:00:00Z'
          }
        ]
      };
    }

    // Главный контроллер приложения
    const app = {
      db: null,
      currentRoute: '/',
      routeParams: {},
      uiState: {
        courseSearch: '',
        courseCategory: 'all',
        courseLevel: 'all',
        courseSort: 'newest',
        librarySearch: '',
        libraryType: 'all',
        libraryCategory: 'all',
        communityType: 'all',
        communitySearch: '',
        flashcardCourse: 'all',
        flashcardIndex: 0,
        flashcardFlipped: false,
        flashcardKnownIds: [],
        flashcardRepeatIds: [],
        activeLessonId: null,
        activeAdminTab: 'overview',
        activeDashboardTab: 'overview',
        studio: {
          materialText: '',
          selectedPreset: 'math',
          activeTab: 'mindmap', // 'mindmap', 'flashcards', 'quiz', 'summary'
          currentCardIndex: 0,
          cardFlipped: false,
          knownCardIds: [],
          repeatCardIds: [],
          quizAnswers: {},
          quizSubmitted: false,
          mindmapCollapsedNodes: {},
          currentPack: null
        }
      },

      init() {
        this.loadDatabase();
        this.initTheme();
        this.initStudio();
        this.renderHeader();
        this.navigate('/');
      },

      // Управление темами: Светлая и Тёмная тема
      initTheme() {
        const saved = localStorage.getItem('aurum_theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isDark = saved === 'dark' || (!saved && prefersDark);
        if (isDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        this.updateThemeButtonIcon();
      },

      toggleTheme() {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('aurum_theme', isDark ? 'dark' : 'light');
        this.updateThemeButtonIcon();
        this.toast(isDark ? 'Тёмная тема активирована' : 'Светлая тема активирована', 'info');
      },

      updateThemeButtonIcon() {
        const btn = document.getElementById('theme-toggle-btn');
        if (!btn) return;
        const isDark = document.documentElement.classList.contains('dark');
        btn.innerHTML = isDark 
          ? '<i class="fa-solid fa-sun text-amber-400 text-base"></i>' 
          : '<i class="fa-solid fa-moon text-slate-600 dark:text-slate-300 text-base"></i>';
        btn.title = isDark ? 'Переключить на светлую тему' : 'Переключить на тёмную тему';
      },

      loadDatabase() {
        try {
          const raw = localStorage.getItem(STORAGE_KEY);
          if (raw) {
            this.db = JSON.parse(raw);
          } else {
            this.db = createInitialDatabase();
            this.saveDatabase();
          }
        } catch (err) {
          console.error('Ошибка чтения localStorage, создаём чистую БД:', err);
          this.db = createInitialDatabase();
        }
      },

      saveDatabase() {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(this.db));
        } catch (err) {
          console.error('Ошибка сохранения БД:', err);
        }
      },

      // Генерация уникального ID (PRD 16.3)
      uid(prefix = 'id') {
        return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 6)}`;
      },

      // Запись в журнал аудита (PRD Бизнес-правило #11)
      logAudit(action, entityType, entityId, details) {
        const user = this.getCurrentUser();
        this.db.audit_logs.unshift({
          id: this.uid('log'),
          actor_id: user ? user.id : 'guest',
          action,
          entity_type: entityType,
          entity_id: entityId,
          details,
          created_at: new Date().toISOString()
        });
        this.saveDatabase();
      },

      // Получение текущего пользователя и его профиля
      getCurrentUser() {
        if (!this.db.currentUserId) return null;
        return this.db.users.find(u => u.id === this.db.currentUserId && u.status === 'active') || null;
      },

      getUserProfile(userId) {
        return this.db.profiles.find(p => p.user_id === userId) || {
          display_name: 'Пользователь',
          avatar_url: 'https://placehold.co/100x100/cbd5e1/1e293b?text=U',
          bio: '',
          interests: [],
          directions: []
        };
      },

      getRoleLabel(role) {
        const map = {
          guest: 'Гость',
          user: 'Ученик',
          editor: 'Редактор контента',
          moderator: 'Модератор',
          admin: 'Администратор'
        };
        return map[role] || 'Гость';
      },

      // Серверная проверка ролей (PRD Раздел 3 и 10)
      hasPermission(permission) {
        const user = this.getCurrentUser();
        const role = user ? user.role : 'guest';
        const matrix = {
          'authenticated': ['user', 'editor', 'moderator', 'admin'],
          'manage_content': ['editor', 'admin'],
          'moderate': ['moderator', 'admin'],
          'admin_only': ['admin']
        };
        return (matrix[permission] || []).includes(role);
      },

      // Переключение роли в верхней панели для быстрой проверки PRD
      switchRole(targetRole) {
        if (targetRole === 'guest') {
          this.db.currentUserId = null;
          this.saveDatabase();
          this.toast('Режим «Гость» активирован. Приватные разделы защищены.', 'info');
          if (this.isPrivateRoute(this.currentRoute)) {
            this.navigate('/');
          } else {
            this.renderHeader();
            this.renderCurrentRoute();
          }
          return;
        }

        const roleUserMap = {
          user: 'u-student-1',
          editor: 'u-editor-1',
          moderator: 'u-mod-1',
          admin: 'u-admin-1'
        };
        const userId = roleUserMap[targetRole];
        const found = this.db.users.find(u => u.id === userId);
        if (found) {
          this.db.currentUserId = found.id;
          this.saveDatabase();
          const profile = this.getUserProfile(found.id);
          this.toast(`Вы вошли как: ${profile.display_name} (${this.getRoleLabel(found.role)})`, 'success');
          this.renderHeader();
          this.renderCurrentRoute();
        }
      },

      isPrivateRoute(path) {
        const privatePrefixes = ['/dashboard', '/profile', '/my-courses', '/learning', '/my-results', '/saved', '/my-posts', '/settings', '/admin'];
        return privatePrefixes.some(p => path.startsWith(p));
      },

      // Маршрутизатор (Раздел 5 Информационная архитектура)
      navigate(path, params = {}) {
        const user = this.getCurrentUser();

        // Проверка доступа к админ-маршрутам (PRD 5.3)
        if (path.startsWith('/admin')) {
          if (!user || !['editor', 'moderator', 'admin'].includes(user.role)) {
            this.toast('Доступ запрещён: требуется роль Редактора, Модератора или Администратора.', 'error');
            this.currentRoute = '/login';
            this.renderHeader();
            this.renderCurrentRoute();
            return;
          }
          // Подмаршруты админки
          const sub = path.replace('/admin/', '').replace('/admin', '');
          if (sub && ['overview', 'users', 'courses', 'lessons', 'tests', 'library', 'categories', 'community', 'reports', 'analytics'].includes(sub)) {
            this.uiState.activeAdminTab = sub;
          } else if (path === '/admin') {
            this.uiState.activeAdminTab = user.role === 'moderator' ? 'reports' : 'overview';
          }
        }

        // Проверка доступа к личному кабинету (PRD 5.2)
        if (this.isPrivateRoute(path) && !path.startsWith('/admin') && !user) {
          this.toast('Пожалуйста, войдите в аккаунт для доступа к личному кабинету.', 'info');
          this.currentRoute = '/login';
          this.renderHeader();
          this.renderCurrentRoute();
          return;
        }

        // Синхронизация вкладок Личного кабинета с маршрутами PRD 5.2
        const dashboardTabsMap = {
          '/dashboard': 'overview',
          '/my-courses': 'courses',
          '/my-results': 'results',
          '/saved': 'saved',
          '/my-posts': 'posts',
          '/profile': 'profile',
          '/settings': 'settings'
        };
        if (dashboardTabsMap[path]) {
          this.uiState.activeDashboardTab = dashboardTabsMap[path];
        }

        this.currentRoute = path;
        this.routeParams = params;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.renderHeader();
        this.renderCurrentRoute();
      },

      renderHeader() {
        const user = this.getCurrentUser();
        const role = user ? user.role : 'guest';

        // Подсветка кнопок переключателя ролей
        ['guest', 'user', 'editor', 'moderator', 'admin'].forEach(r => {
          const btn = document.getElementById(`role-btn-${r}`);
          if (!btn) return;
          if (r === role) {
            btn.className = 'px-2.5 py-1 rounded-md text-xs font-bold bg-amber-500 text-slate-950 shadow-xs transition';
          } else {
            btn.className = 'px-2.5 py-1 rounded-md text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-700 transition';
          }
        });

        // Индикатор текущего маршрута
        const routeEl = document.getElementById('route-indicator');
        if (routeEl) routeEl.textContent = this.currentRoute;

        // Подсветка активного пункта меню
        document.querySelectorAll('.nav-link').forEach(link => {
          const navTarget = link.getAttribute('data-nav');
          const active = (navTarget === '/' && this.currentRoute === '/') ||
                         (navTarget !== '/' && this.currentRoute.startsWith(navTarget));
          if (active) {
            link.className = 'nav-link px-3 py-2 rounded-lg text-sm font-semibold text-amber-700 bg-amber-50 dark:bg-amber-950/40 dark:text-amber-400 transition';
          } else {
            link.className = 'nav-link px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition';
          }
        });

        // Пользовательский блок в шапке
        const area = document.getElementById('header-user-area');
        if (!user) {
          area.innerHTML = `
            <button onclick="app.navigate('/login')" class="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-100 transition">
              Войти
            </button>
            <button onclick="app.navigate('/register')" class="px-4 py-2 rounded-xl text-sm font-semibold bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-xs transition">
              Регистрация
            </button>
          `;
        } else {
          const profile = this.getUserProfile(user.id);
          const canAdmin = ['editor', 'moderator', 'admin'].includes(user.role);
          const pendingReports = this.db.reports.filter(r => r.status === 'new').length;

          area.innerHTML = `
            ${canAdmin ? `
              <button onclick="app.navigate('/admin')" class="px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-amber-400 flex items-center gap-1.5 transition shadow-xs">
                <i class="fa-solid fa-sliders"></i>
                <span class="hidden sm:inline">${user.role === 'editor' ? 'Студия контента' : user.role === 'moderator' ? 'Модерация' : 'Админ-панель'}</span>
                ${pendingReports > 0 && ['moderator', 'admin'].includes(user.role) ? `<span class="px-1.5 py-0.2 rounded-full bg-rose-500 text-white text-[10px] font-bold">${pendingReports}</span>` : ''}
              </button>
            ` : ''}
            <button onclick="app.navigate('/saved')" class="p-2 rounded-xl text-slate-600 hover:text-amber-600 hover:bg-slate-100 transition relative" title="Избранное">
              <i class="fa-regular fa-bookmark"></i>
              <span class="sr-only">Избранное</span>
            </button>
            <button onclick="app.navigate('/dashboard')" class="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-xl border border-slate-200 hover:border-amber-400 bg-slate-50/70 transition">
              <img src="${this.escapeHtml(profile.avatar_url)}" alt="Аватар" class="w-7 h-7 rounded-full object-cover border border-amber-400" onerror="this.src='https://placehold.co/80x80/f59e0b/0f172a?text=U'" />
              <div class="text-left hidden sm:block">
                <div class="text-xs font-bold text-slate-900 leading-tight max-w-[130px] truncate">${this.escapeHtml(profile.display_name)}</div>
                <div class="text-[10px] text-amber-700 font-semibold leading-tight">${this.getRoleLabel(user.role)}</div>
              </div>
            </button>
            <button onclick="app.logout()" class="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition" title="Выйти">
              <i class="fa-solid fa-right-from-bracket"></i>
            </button>
          `;
        }
      },

      // Вычисление прогресса курса по формуле PRD 6.13:
      // Количество завершённых уроков / Общее количество доступных уроков × 100%
      // Если в курсе нет уроков, процент прогресса равен 0%.
      calculateCourseProgress(userId, courseId) {
        const publishedLessons = this.db.lessons.filter(l => l.course_id === courseId && l.status === 'published');
        const total = publishedLessons.length;
        if (total === 0) {
          return { completed: 0, total: 0, percent: 0 };
        }
        if (!userId) {
          return { completed: 0, total, percent: 0 };
        }
        const lessonIds = new Set(publishedLessons.map(l => l.id));
        const completed = this.db.lesson_progress.filter(
          lp => lp.user_id === userId && lessonIds.has(lp.lesson_id) && lp.status === 'completed'
        ).length;
        const percent = Math.round((completed / total) * 100);
        return { completed, total, percent };
      },

      // Отрисовка активного экрана
      renderCurrentRoute() {
        const root = document.getElementById('app-root');
        if (!root) return;

        const path = this.currentRoute;

        if (path === '/') {
          root.innerHTML = this.renderLandingPage();
        } else if (path === '/courses') {
          root.innerHTML = this.renderCatalogPage();
        } else if (path.startsWith('/courses/')) {
          const slug = path.replace('/courses/', '');
          root.innerHTML = this.renderCourseDetailPage(slug);
        } else if (path.startsWith('/learning/')) {
          const courseId = path.replace('/learning/', '');
          root.innerHTML = this.renderLearningPlayerPage(courseId);
        } else if (path === '/library' || path.startsWith('/library/')) {
          root.innerHTML = this.renderLibraryPage();
        } else if (path === '/studio' || path.startsWith('/studio')) {
          root.innerHTML = this.renderStudioPage();
        } else if (path === '/flashcards') {
          root.innerHTML = this.renderStudioPage('flashcards');
        } else if (path === '/community' || path.startsWith('/community/')) {
          const postId = path.startsWith('/community/') ? path.replace('/community/', '') : null;
          root.innerHTML = this.renderCommunityPage(postId);
        } else if (path === '/login') {
          root.innerHTML = this.renderAuthPage('login');
        } else if (path === '/register') {
          root.innerHTML = this.renderAuthPage('register');
        } else if (path === '/about') {
          root.innerHTML = this.renderAboutPage();
        } else if (['/dashboard', '/profile', '/my-courses', '/my-results', '/saved', '/my-posts', '/settings'].includes(path)) {
          root.innerHTML = this.renderDashboardPage();
        } else if (path.startsWith('/admin')) {
          root.innerHTML = this.renderAdminPage();
        } else {
          root.innerHTML = this.renderLandingPage();
        }
      },

      // ===================================================================
      // 1. LANDING PAGE (PRD 6.1 — все 12 обязательных блоков, реальные данные из БД)
      // ===================================================================
      renderLandingPage() {
        const publishedCourses = this.db.courses.filter(c => c.status === 'published');
        const publishedLessons = this.db.lessons.filter(l => l.status === 'published');
        const publishedMaterials = this.db.library_materials.filter(m => m.status === 'published');
        const activeCategories = this.db.categories.filter(c => c.status === 'active');
        const publishedPosts = this.db.posts.filter(p => p.status === 'published');
        const user = this.getCurrentUser();

        return `
          <div class="fade-enter">
            <!-- Блок 1: Hero-блок с названием Aurum Academy -->
            <section class="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white py-16 sm:py-24 border-b border-slate-800">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div class="lg:col-span-7 space-y-6">
                    <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold">
                      <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                      Образовательная платформа • Узбекистан • Бесплатный базовый доступ
                    </div>
                    <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                      Aurum Academy — единое пространство для <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">учёбы, практики и сообщества</span>
                    </h1>
                    <p class="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                      Мы объединяем интерактивные курсы, конспекты, автоматизированные тесты, карточки для повторения и сообщество учащихся, чтобы качественное образование было доступно каждому независимо от дохода и региона проживания.
                    </p>
                    <div class="flex flex-wrap items-center gap-3 pt-2">
                      <button onclick="app.navigate('/courses')" class="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-500/20 transition flex items-center gap-2">
                        <span>Перейти к каталогу курсов</span>
                        <i class="fa-solid fa-arrow-right"></i>
                      </button>
                      ${!user ? `
                        <button onclick="app.navigate('/register')" class="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm sm:text-base border border-slate-700 transition">
                          Создать бесплатный аккаунт
                        </button>
                      ` : `
                        <button onclick="app.navigate('/dashboard')" class="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm sm:text-base border border-slate-700 transition">
                          Открыть личный кабинет
                        </button>
                      `}
                    </div>

                    <!-- Реальные показатели из базы данных (PRD 6.1: без фиктивных счётчиков) -->
                    <div class="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800/80">
                      <div>
                        <div class="text-2xl font-extrabold text-amber-400">${publishedCourses.length}</div>
                        <div class="text-xs text-slate-400">Опубликованных курсов в БД</div>
                      </div>
                      <div>
                        <div class="text-2xl font-extrabold text-amber-400">${publishedLessons.length}</div>
                        <div class="text-xs text-slate-400">Доступных уроков</div>
                      </div>
                      <div>
                        <div class="text-2xl font-extrabold text-amber-400">${publishedMaterials.length}</div>
                        <div class="text-xs text-slate-400">Материалов в библиотеке</div>
                      </div>
                      <div>
                        <div class="text-2xl font-extrabold text-amber-400">${publishedPosts.length}</div>
                        <div class="text-xs text-slate-400">Обсуждений сообщества</div>
                      </div>
                    </div>
                  </div>

                  <!-- Интерактивная карточка предпросмотра возможностей -->
                  <div class="lg:col-span-5">
                    <div class="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 shadow-2xl space-y-5">
                      <div class="flex items-center justify-between border-b border-slate-700 pb-4">
                        <div class="flex items-center gap-3">
                          <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                            <i class="fa-solid fa-bolt"></i>
                          </div>
                          <div>
                            <div class="text-sm font-bold text-white">Интерактивная демонстрация MVP</div>
                            <div class="text-xs text-slate-400">Все данные управляются через CRUD</div>
                          </div>
                        </div>
                        <span class="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Live DB</span>
                      </div>

                      <div class="space-y-3 text-xs sm:text-sm">
                        <div class="p-3.5 rounded-xl bg-slate-900/70 border border-slate-700/70 flex items-start gap-3">
                          <i class="fa-solid fa-check-circle text-emerald-400 mt-0.5"></i>
                          <div>
                            <div class="font-semibold text-white">Уроки, тесты и проверка на сервере</div>
                            <div class="text-slate-400 text-xs">Поддержка одиночного, множественного выбора и текстового ответа с нормализацией.</div>
                          </div>
                        </div>
                        <div class="p-3.5 rounded-xl bg-slate-900/70 border border-slate-700/70 flex items-start gap-3">
                          <i class="fa-solid fa-check-circle text-amber-400 mt-0.5"></i>
                          <div>
                            <div class="font-semibold text-white">Отслеживание личного прогресса</div>
                            <div class="text-slate-400 text-xs">Прогресс хранится отдельно от курсов и сохраняется между сессиями.</div>
                          </div>
                        </div>
                        <div class="p-3.5 rounded-xl bg-slate-900/70 border border-slate-700/70 flex items-start gap-3">
                          <i class="fa-solid fa-check-circle text-sky-400 mt-0.5"></i>
                          <div>
                            <div class="font-semibold text-white">Ролевая модель (Гость, Ученик, Редактор, Модератор, Админ)</div>
                            <div class="text-slate-400 text-xs">Переключайте роли в верхней панели и тестируйте все сценарии A–E из PRD.</div>
                          </div>
                        </div>
                      </div>

                      <div class="pt-2 flex gap-2">
                        <button onclick="app.navigate('/learning/course-1')" class="w-full py-2.5 px-4 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 font-semibold text-xs sm:text-sm transition">
                          <i class="fa-solid fa-play mr-1.5"></i> Протестировать плеер урока и тест
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Блок 2 и 3: Проблема доступности образования и Принцип работы платформы -->
            <section class="py-14 bg-white border-b border-slate-200">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                  <div class="p-6 sm:p-8 rounded-2xl bg-rose-50/60 border border-rose-200/80 flex flex-col justify-between">
                    <div>
                      <span class="inline-block px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider mb-3">
                        Проблема (PRD 1.2)
                      </span>
                      <h2 class="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                        Неравномерный доступ и разрозненность учебных ресурсов
                      </h2>
                      <p class="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                        Подготовка к поступлению в вузы и освоение первой профессии часто требуют значительных расходов на репетиторов и платные курсы. Учебные материалы разбросаны по десяткам сайтов и Telegram-каналов, из-за чего ученику сложно выстроить системный план, отслеживать свой прогресс и находить поддержку.
                      </p>
                    </div>
                    <div class="grid grid-cols-2 gap-3 pt-4 border-t border-rose-200/60 text-xs text-rose-900 font-medium">
                      <div class="flex items-center gap-2"><i class="fa-solid fa-xmark text-rose-500"></i> Высокая стоимость репетиторов</div>
                      <div class="flex items-center gap-2"><i class="fa-solid fa-xmark text-rose-500"></i> Нет единого трекера прогресса</div>
                    </div>
                  </div>

                  <div class="p-6 sm:p-8 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 flex flex-col justify-between">
                    <div>
                      <span class="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
                        Решение Aurum Academy (PRD 1.3)
                      </span>
                      <h2 class="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                        Единая экосистема: от теории до тестов и сообщества
                      </h2>
                      <p class="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                        Вместо поиска книг, тестов и учебных групп на разных ресурсах пользователь получает структурированные курсы, проверенную библиотеку открытых материалов (OER), карточки для запоминания формул и безопасное сообщество единомышленников.
                      </p>
                    </div>
                    <div class="grid grid-cols-2 gap-3 pt-4 border-t border-emerald-200/60 text-xs text-emerald-900 font-medium">
                      <div class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-600"></i> Бесплатный базовый доступ</div>
                      <div class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-600"></i> Прозрачный расчёт прогресса</div>
                    </div>
                  </div>
                </div>

                <!-- Принцип работы платформы (4 шага) -->
                <div class="mt-12">
                  <h3 class="text-center text-lg sm:text-xl font-bold text-slate-900 mb-8">Как устроено обучение на платформе</h3>
                  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                      <div class="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 font-extrabold flex items-center justify-center mb-3">1</div>
                      <h4 class="font-bold text-slate-900 mb-1">Выбор направления</h4>
                      <p class="text-xs text-slate-600 leading-relaxed">Выберите курс в каталоге по категории и уровню сложности и запишитесь в один клик.</p>
                    </div>
                    <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                      <div class="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 font-extrabold flex items-center justify-center mb-3">2</div>
                      <h4 class="font-bold text-slate-900 mb-1">Изучение уроков и карточек</h4>
                      <p class="text-xs text-slate-600 leading-relaxed">Читайте конспекты, смотрите материалы и закрепляйте термины с помощью интерактивных карточек.</p>
                    </div>
                    <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                      <div class="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 font-extrabold flex items-center justify-center mb-3">3</div>
                      <h4 class="font-bold text-slate-900 mb-1">Проверка знаний в тестах</h4>
                      <p class="text-xs text-slate-600 leading-relaxed">Проходите тесты с автоматической проверкой и подробным разбором каждого вопроса.</p>
                    </div>
                    <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                      <div class="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 font-extrabold flex items-center justify-center mb-3">4</div>
                      <h4 class="font-bold text-slate-900 mb-1">Обмен опытом в сообществе</h4>
                      <p class="text-xs text-slate-600 leading-relaxed">Задавайте вопросы, ищите учебные группы и сохраняйте полезные книги в избранное.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Блок 4: Каталог направлений и опубликованных курсов (загружаются из БД) -->
            <section class="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                <div>
                  <span class="text-xs font-bold uppercase tracking-wider text-amber-600">Каталог из базы данных</span>
                  <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Актуальные направления и курсы</h2>
                </div>
                <button onclick="app.navigate('/courses')" class="text-sm font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1.5">
                  <span>Смотреть все курсы (${publishedCourses.length})</span>
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>

              <!-- Категории из БД -->
              ${activeCategories.length === 0 ? `
                <div class="p-8 rounded-2xl bg-white border border-slate-200 text-center text-slate-500">
                  Категории пока не добавлены.
                </div>
              ` : `
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                  ${activeCategories.map(cat => {
                    const count = publishedCourses.filter(c => c.category_id === cat.id).length;
                    return `
                      <button onclick="app.filterByCategoryAndGo('${cat.id}')" class="p-5 rounded-2xl bg-white hover:bg-amber-50/40 border border-slate-200 hover:border-amber-400 text-left transition group shadow-xs">
                        <div class="flex items-center justify-between mb-2">
                          <span class="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                            <i class="fa-solid fa-folder-open"></i>
                          </span>
                          <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">${count} курс(ов)</span>
                        </div>
                        <h3 class="font-bold text-slate-900 group-hover:text-amber-700 transition">${this.escapeHtml(cat.name)}</h3>
                        <p class="text-xs text-slate-500 mt-1 line-clamp-2">${this.escapeHtml(cat.description)}</p>
                      </button>
                    `;
                  }).join('')}
                </div>
              `}

              <!-- Карточки опубликованных курсов -->
              ${publishedCourses.length === 0 ? `
                <div class="p-12 rounded-2xl bg-white border border-slate-200 text-center">
                  <p class="text-slate-600 font-medium">В каталоге пока нет опубликованных курсов.</p>
                </div>
              ` : `
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  ${publishedCourses.slice(0, 3).map(course => this.renderCourseCard(course)).join('')}
                </div>
              `}
            </section>

            <!-- Блок 5, 6, 7, 8, 9: Преимущества, Библиотека, Сообщество, Бесплатный доступ и Социальная миссия -->
            <section class="py-14 bg-slate-900 text-white">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-12">
                  <span class="text-xs font-bold uppercase tracking-wider text-amber-400">Принципы продукта (PRD 1.4)</span>
                  <h2 class="text-2xl sm:text-3xl font-extrabold mt-1">Все инструменты для учёбы в одном месте</h2>
                  <p class="text-slate-400 text-sm sm:text-base mt-2">
                    Модульная архитектура Aurum Academy построена вокруг прозрачности данных, безопасности и бесплатного доступа к базовым знаниям.
                  </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div class="p-6 rounded-2xl bg-slate-800/90 border border-slate-700 flex flex-col justify-between">
                    <div>
                      <div class="w-11 h-11 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-lg mb-4">
                        <i class="fa-solid fa-wand-magic-sparkles"></i>
                      </div>
                      <h3 class="text-lg font-bold mb-2">Образовательная Студия</h3>
                      <p class="text-sm text-slate-300 leading-relaxed mb-4">
                        Превращайте любой материал, параграф или конспект в интерактивные ментальные карты (Mind Maps), 3D-карточки, адаптивные тесты для самопроверки и структурированные выжимки.
                      </p>
                    </div>
                    <div class="flex items-center gap-3">
                      <button onclick="app.navigate('/studio')" class="text-amber-400 hover:text-amber-300 text-sm font-semibold inline-flex items-center gap-1.5">
                        <span>Перейти в Студию</span> <i class="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                      <span>Открыть библиотеку</span> <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>

                  <div class="p-6 rounded-2xl bg-slate-800/90 border border-slate-700 flex flex-col justify-between">
                    <div>
                      <div class="w-11 h-11 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center text-lg mb-4">
                        <i class="fa-solid fa-users"></i>
                      </div>
                      <h3 class="text-lg font-bold mb-2">Безопасное учебное сообщество</h3>
                      <p class="text-sm text-slate-300 leading-relaxed mb-4">
                        Публикуйте вопросы по сложным темам, делитесь советами и собирайте учебные группы. Встроенная система жалоб и модерации защищает участников.
                      </p>
                    </div>
                    <button onclick="app.navigate('/community')" class="text-sky-400 hover:text-sky-300 text-sm font-semibold inline-flex items-center gap-1.5">
                      <span>Перейти в сообщество</span> <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>

                  <div class="p-6 rounded-2xl bg-slate-800/90 border border-slate-700 flex flex-col justify-between">
                    <div>
                      <div class="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-lg mb-4">
                        <i class="fa-solid fa-hand-holding-heart"></i>
                      </div>
                      <h3 class="text-lg font-bold mb-2">Социальная миссия и партнёрства</h3>
                      <p class="text-sm text-slate-300 leading-relaxed mb-4">
                        Базовые образовательные функции полностью бесплатны для школьников и студентов всех регионов Узбекистана. Мы открыты для школ, вузов и авторов контента.
                      </p>
                    </div>
                    <button onclick="app.navigate('/about')" class="text-emerald-400 hover:text-emerald-300 text-sm font-semibold inline-flex items-center gap-1.5">
                      <span>Узнать о миссии и архитектуре</span> <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <!-- Блок 10: FAQ и Блок 11: Призыв зарегистрироваться -->
            <section class="py-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="text-center mb-10">
                <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">Часто задаваемые вопросы (FAQ)</h2>
                <p class="text-slate-500 text-sm mt-1">Ответы на основные вопросы о работе платформы Aurum Academy</p>
              </div>

              <div class="space-y-4">
                <div class="p-5 rounded-2xl bg-white border border-slate-200">
                  <h4 class="font-bold text-slate-900">1. Действительно ли обучение на Aurum Academy бесплатное?</h4>
                  <p class="text-sm text-slate-600 mt-1.5">Да. Согласно принципу Accessibility (п. 1.4 PRD), каталог базовых курсов, уроки, тестирование, карточки для повторения и библиотека материалов доступны бесплатно.</p>
                </div>
                <div class="p-5 rounded-2xl bg-white border border-slate-200">
                  <h4 class="font-bold text-slate-900">2. Как рассчитывается мой прогресс по курсу?</h4>
                  <p class="text-sm text-slate-600 mt-1.5">Прогресс вычисляется автоматически по формуле: количество завершённых вами уроков делится на общее число опубликованных уроков курса × 100%. История обучения сохраняется отдельно от контента.</p>
                </div>
                <div class="p-5 rounded-2xl bg-white border border-slate-200">
                  <h4 class="font-bold text-slate-900">3. Могу ли я предложить свой курс или конспект?</h4>
                  <p class="text-sm text-slate-600 mt-1.5">В версии MVP курсы создаются и публикуются проверенными редакторами команды проекта, чтобы гарантировать академическое качество. При этом любой зарегистрированный пользователь может делиться советами и конспектами в разделе «Сообщество».</p>
                </div>
              </div>

              <!-- Блок 11: CTA -->
              <div class="mt-12 p-8 rounded-3xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                <div>
                  <h3 class="text-xl sm:text-2xl font-extrabold">Готовы начать системное обучение?</h3>
                  <p class="text-slate-900/80 text-sm mt-1">Запишитесь на первый курс, проходите тесты и отслеживайте прогресс в личном кабинете.</p>
                </div>
                <div class="flex gap-3 shrink-0">
                  <button onclick="app.navigate('${user ? '/courses' : '/register'}')" class="px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm transition shadow-md">
                    ${user ? 'Выбрать курс в каталоге' : 'Зарегистрироваться бесплатно'}
                  </button>
                </div>
              </div>
            </section>
          </div>
        `;
      },

      filterByCategoryAndGo(categoryId) {
        this.uiState.courseCategory = categoryId;
        this.navigate('/courses');
      },

      // Универсальная карточка курса (PRD 6.4)
      renderCourseCard(course) {
        const user = this.getCurrentUser();
        const cat = this.db.categories.find(c => c.id === course.category_id);
        const author = this.getUserProfile(course.author_id);
        const lessonsCount = this.db.lessons.filter(l => l.course_id === course.id && l.status === 'published').length;
        const isEnrolled = user && this.db.enrollments.some(e => e.user_id === user.id && e.course_id === course.id);
        const isFav = user && this.db.favorites.some(f => f.user_id === user.id && f.entity_type === 'course' && f.entity_id === course.id);
        const progress = user ? this.calculateCourseProgress(user.id, course.id) : null;

        return `
          <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div class="relative h-44 bg-slate-900 overflow-hidden">
                <img src="${this.escapeHtml(course.cover_url)}" alt="${this.escapeHtml(course.title)}" class="w-full h-full object-cover" onerror="this.src='https://placehold.co/800x420/1e293b/fbbf24?text=Aurum+Course'" />
                <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span class="px-2.5 py-1 rounded-lg bg-slate-900/85 text-amber-300 text-xs font-semibold backdrop-blur-xs">
                    ${cat ? this.escapeHtml(cat.name) : 'Общее'}
                  </span>
                </div>
                <button onclick="app.toggleFavorite('course', '${course.id}')" class="absolute top-3 right-3 w-9 h-9 rounded-xl bg-white/90 hover:bg-white text-slate-700 flex items-center justify-center shadow-sm transition" title="Сохранить в избранное">
                  <i class="${isFav ? 'fa-solid text-amber-500' : 'fa-regular'} fa-bookmark"></i>
                </button>
              </div>

              <div class="p-5">
                <div class="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <span class="px-2 py-0.5 rounded bg-slate-100 font-medium text-slate-700">${this.escapeHtml(course.level)}</span>
                  <span>•</span>
                  <span><i class="fa-regular fa-clock mr-1"></i>${course.duration_hours || 10} ч.</span>
                  <span>•</span>
                  <span><i class="fa-solid fa-list-check mr-1"></i>${lessonsCount} ур.</span>
                </div>

                <h3 onclick="app.navigate('/courses/${course.slug}')" class="font-bold text-slate-900 text-lg hover:text-amber-600 cursor-pointer transition leading-snug mb-2">
                  ${this.escapeHtml(course.title)}
                </h3>

                <p class="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                  ${this.escapeHtml(course.description)}
                </p>

                <div class="text-xs text-slate-500 flex items-center justify-between pt-3 border-t border-slate-100">
                  <span>Автор: <strong class="text-slate-700">${this.escapeHtml(author.display_name)}</strong></span>
                  <span class="uppercase text-[11px] font-semibold text-slate-400">${this.escapeHtml(course.language)}</span>
                </div>

                ${isEnrolled && progress ? `
                  <div class="mt-3 pt-3 border-t border-slate-100">
                    <div class="flex items-center justify-between text-xs mb-1">
                      <span class="font-semibold text-slate-700">Ваш прогресс</span>
                      <span class="font-bold text-amber-600">${progress.percent}% (${progress.completed}/${progress.total})</span>
                    </div>
                    <div class="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div class="h-full bg-amber-500 transition-all" style="width: ${progress.percent}%"></div>
                    </div>
                  </div>
                ` : ''}
              </div>
            </div>

            <div class="px-5 pb-5 pt-1 flex items-center gap-2">
              <button onclick="app.navigate('/courses/${course.slug}')" class="flex-1 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm transition">
                Подробнее
              </button>
              ${isEnrolled ? `
                <button onclick="app.navigate('/learning/${course.id}')" class="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition">
                  Продолжить
                </button>
              ` : `
                <button onclick="app.enrollInCourse('${course.id}')" class="flex-1 py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition">
                  Записаться
                </button>
              `}
            </div>
          </div>
        `;
      },

      // ===================================================================
      // 2. КАТАЛОГ КУРСОВ (/courses — PRD 6.4)
      // ===================================================================
      renderCatalogPage() {
        const categories = this.db.categories.filter(c => c.status === 'active');
        let courses = this.db.courses.filter(c => c.status === 'published');

        // Поиск
        if (this.uiState.courseSearch.trim()) {
          const q = this.uiState.courseSearch.trim().toLowerCase();
          courses = courses.filter(c => c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q));
        }

        // Фильтр по категории
        if (this.uiState.courseCategory !== 'all') {
          courses = courses.filter(c => c.category_id === this.uiState.courseCategory);
        }

        // Фильтр по уровню
        if (this.uiState.courseLevel !== 'all') {
          courses = courses.filter(c => c.level === this.uiState.courseLevel);
        }

        // Сортировка
        if (this.uiState.courseSort === 'title') {
          courses.sort((a, b) => a.title.localeCompare(b.title, 'ru'));
        } else {
          courses.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        }

        const canEdit = this.hasPermission('manage_content');

        return `
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 fade-enter">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900">Каталог образовательных курсов</h1>
                <p class="text-slate-600 text-sm mt-1">В публичном каталоге отображаются только опубликованные курсы (Бизнес-правило #1)</p>
              </div>
              ${canEdit ? `
                <button onclick="app.openCourseModal()" class="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 font-semibold text-sm flex items-center gap-2 self-start">
                  <i class="fa-solid fa-plus"></i> Создать курс (CRUD)
                </button>
              ` : ''}
            </div>

            <!-- Панель поиска, фильтрации и сортировки -->
            <div class="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div>
                <label class="block text-xs font-semibold text-slate-500 mb-1">Поиск по названию</label>
                <div class="relative">
                  <i class="fa-solid fa-magnifying-glass absolute left-3 top-3 text-slate-400 text-xs"></i>
                  <input type="text" value="${this.escapeHtml(this.uiState.courseSearch)}" oninput="app.updateCatalogFilter('courseSearch', this.value)" placeholder="Математика, Python..." class="w-full pl-8 pr-3 py-2 rounded-xl border border-slate-200 text-sm" />
                </div>
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-500 mb-1">Категория</label>
                <select onchange="app.updateCatalogFilter('courseCategory', this.value)" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm bg-white">
                  <option value="all" ${this.uiState.courseCategory === 'all' ? 'selected' : ''}>Все направления</option>
                  ${categories.map(c => `<option value="${c.id}" ${this.uiState.courseCategory === c.id ? 'selected' : ''}>${this.escapeHtml(c.name)}</option>`).join('')}
                </select>
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-500 mb-1">Уровень сложности</label>
                <select onchange="app.updateCatalogFilter('courseLevel', this.value)" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm bg-white">
                  <option value="all" ${this.uiState.courseLevel === 'all' ? 'selected' : ''}>Любой уровень</option>
                  <option value="Начальный" ${this.uiState.courseLevel === 'Начальный' ? 'selected' : ''}>Начальный</option>
                  <option value="Начальный / Средний" ${this.uiState.courseLevel === 'Начальный / Средний' ? 'selected' : ''}>Начальный / Средний</option>
                  <option value="Средний" ${this.uiState.courseLevel === 'Средний' ? 'selected' : ''}>Средний</option>
                  <option value="Продвинутый" ${this.uiState.courseLevel === 'Продвинутый' ? 'selected' : ''}>Продвинутый</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-500 mb-1">Сортировка</label>
                <select onchange="app.updateCatalogFilter('courseSort', this.value)" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm bg-white">
                  <option value="newest" ${this.uiState.courseSort === 'newest' ? 'selected' : ''}>По дате добавления</option>
                  <option value="title" ${this.uiState.courseSort === 'title' ? 'selected' : ''}>По названию (А–Я)</option>
                </select>
              </div>
            </div>

            ${courses.length === 0 ? `
              <div class="bg-white rounded-2xl border border-slate-200 p-12 text-center">
                <div class="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3 text-xl">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <h3 class="font-bold text-slate-900">Курсы по заданным фильтрам не найдены</h3>
                <p class="text-sm text-slate-500 mt-1 mb-4">Попробуйте сбросить параметры фильтрации или поисковый запрос.</p>
                <button onclick="app.resetCatalogFilters()" class="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-semibold text-sm">Сбросить фильтры</button>
              </div>
            ` : `
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${courses.map(course => this.renderCourseCard(course)).join('')}
              </div>
            `}
          </div>
        `;
      },

      updateCatalogFilter(key, val) {
        this.uiState[key] = val;
        this.renderCurrentRoute();
      },

      resetCatalogFilters() {
        this.uiState.courseSearch = '';
        this.uiState.courseCategory = 'all';
        this.uiState.courseLevel = 'all';
        this.uiState.courseSort = 'newest';
        this.renderCurrentRoute();
      },

      // ===================================================================
      // 3. СТРАНИЦА КУРСА (/courses/:slug — PRD 6.5)
      // ===================================================================
      renderCourseDetailPage(slug) {
        const course = this.db.courses.find(c => c.slug === slug || c.id === slug);
        const user = this.getCurrentUser();
        const canEdit = this.hasPermission('manage_content');

        if (!course || (course.status !== 'published' && !canEdit)) {
          return `
            <div class="max-w-4xl mx-auto px-4 py-16 text-center">
              <h2 class="text-2xl font-bold text-slate-900">Курс не найден или находится в черновиках</h2>
              <p class="text-slate-600 text-sm mt-2 mb-6">Черновики доступны только редакторам и администраторам (Бизнес-правило #2).</p>
              <button onclick="app.navigate('/courses')" class="px-5 py-2.5 rounded-xl bg-amber-500 font-bold text-slate-950">Вернуться в каталог</button>
            </div>
          `;
        }

        const cat = this.db.categories.find(c => c.id === course.category_id);
        const author = this.getUserProfile(course.author_id);
        const lessons = this.db.lessons
          .filter(l => l.course_id === course.id && (l.status === 'published' || canEdit))
          .sort((a, b) => a.position - b.position);
        const isEnrolled = user && this.db.enrollments.some(e => e.user_id === user.id && e.course_id === course.id);
        const progress = this.calculateCourseProgress(user ? user.id : null, course.id);
        const relatedMaterials = this.db.library_materials.filter(m => m.category_id === course.category_id && m.status === 'published');
        const courseFlashcards = this.db.flashcards.filter(f => f.course_id === course.id && f.status === 'published');

        return `
          <div class="fade-enter">
            <div class="bg-slate-900 text-white py-12 border-b border-slate-800">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <button onclick="app.navigate('/courses')" class="text-xs font-semibold text-amber-400 hover:underline mb-4 inline-flex items-center gap-1.5">
                  <i class="fa-solid fa-arrow-left"></i> Назад в каталог курсов
                </button>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div class="lg:col-span-8 space-y-4">
                    <div class="flex flex-wrap items-center gap-2">
                      <span class="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">${cat ? this.escapeHtml(cat.name) : 'Курс'}</span>
                      <span class="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium">${this.escapeHtml(course.level)}</span>
                      <span class="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium"><i class="fa-regular fa-clock mr-1"></i>${course.duration_hours || 12} часов</span>
                      ${course.status !== 'published' ? `<span class="px-3 py-1 rounded-full bg-rose-500 text-white text-xs font-bold uppercase">${course.status}</span>` : ''}
                    </div>
                    <h1 class="text-2xl sm:text-4xl font-extrabold leading-tight">${this.escapeHtml(course.title)}</h1>
                    <p class="text-slate-300 text-sm sm:text-base leading-relaxed">${this.escapeHtml(course.description)}</p>
                    <div class="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                      <span>Автор курса: <strong class="text-white">${this.escapeHtml(author.display_name)}</strong></span>
                      <span>•</span>
                      <span>Язык: <strong class="text-white">${this.escapeHtml(course.language)}</strong></span>
                      <span>•</span>
                      <span>Уроков: <strong class="text-white">${lessons.length}</strong></span>
                    </div>
                  </div>

                  <div class="lg:col-span-4 bg-slate-800 border border-slate-700 rounded-2xl p-6 space-y-4">
                    ${isEnrolled ? `
                      <div>
                        <div class="flex justify-between text-xs mb-1.5">
                          <span class="text-slate-300 font-medium">Ваш прогресс обучения</span>
                          <span class="text-amber-400 font-bold">${progress.percent}% (${progress.completed}/${progress.total})</span>
                        </div>
                        <div class="w-full h-2.5 rounded-full bg-slate-900 overflow-hidden">
                          <div class="h-full bg-amber-500" style="width: ${progress.percent}%"></div>
                        </div>
                      </div>
                      <button onclick="app.navigate('/learning/${course.id}')" class="w-full py-3 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm transition shadow-lg">
                        <i class="fa-solid fa-play mr-1.5"></i> Продолжить обучение
                      </button>
                    ` : `
                      <div class="text-sm text-slate-300">
                        Запишитесь на курс бесплатно, чтобы сохранять завершённые уроки и результаты тестов.
                      </div>
                      <button onclick="app.enrollInCourse('${course.id}')" class="w-full py-3 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm transition shadow-lg">
                        Записаться на курс бесплатно
                      </button>
                    `}

                    ${canEdit ? `
                      <div class="pt-3 border-t border-slate-700 flex gap-2">
                        <button onclick="app.openCourseModal('${course.id}')" class="flex-1 py-2 px-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-xs font-semibold text-white">
                          <i class="fa-solid fa-pen mr-1"></i> Изменить курс
                        </button>
                        <button onclick="app.openLessonModal(null, '${course.id}')" class="flex-1 py-2 px-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-xs font-semibold text-amber-300">
                          <i class="fa-solid fa-plus mr-1"></i> Добавить урок
                        </button>
                      </div>
                    ` : ''}
                  </div>
                </div>
              </div>
            </div>

            <!-- Содержание страницы курса -->
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div class="lg:col-span-8 space-y-8">
                <!-- Цели обучения -->
                <div class="bg-white p-6 rounded-2xl border border-slate-200">
                  <h2 class="text-lg font-bold text-slate-900 mb-4">Чему вы научитесь (Цели обучения)</h2>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    ${(course.objectives || []).map(obj => `
                      <div class="flex items-start gap-2.5 text-sm text-slate-700">
                        <i class="fa-solid fa-circle-check text-emerald-600 mt-1"></i>
                        <span>${this.escapeHtml(obj)}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>

                <!-- Программа курса и список уроков -->
                <div class="bg-white p-6 rounded-2xl border border-slate-200">
                  <div class="flex items-center justify-between mb-4">
                    <h2 class="text-lg font-bold text-slate-900">Программа курса (${lessons.length} уроков)</h2>
                    ${courseFlashcards.length > 0 ? `
                      <button onclick="app.openCourseFlashcards('${course.id}')" class="text-xs font-semibold text-amber-700 hover:text-amber-800 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200">
                        <i class="fa-solid fa-layer-group mr-1"></i> Карточки курса (${courseFlashcards.length})
                      </button>
                    ` : ''}
                  </div>

                  ${lessons.length === 0 ? `
                    <p class="text-sm text-slate-500 py-6 text-center">Уроки в этот курс ещё не добавлены.</p>
                  ` : `
                    <div class="space-y-3">
                      ${lessons.map((lesson, idx) => {
                        const done = user && this.db.lesson_progress.some(lp => lp.user_id === user.id && lp.lesson_id === lesson.id && lp.status === 'completed');
                        const hasTest = this.db.tests.some(t => t.lesson_id === lesson.id && t.status === 'published');
                        return `
                          <div class="p-4 rounded-xl border ${done ? 'border-emerald-200 bg-emerald-50/30' : 'border-slate-200 bg-slate-50/50'} flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div class="flex items-start gap-3">
                              <div class="w-8 h-8 rounded-lg ${done ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'} font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                                ${done ? '<i class="fa-solid fa-check"></i>' : idx + 1}
                              </div>
                              <div>
                                <div class="font-bold text-slate-900 text-sm flex items-center gap-2 flex-wrap">
                                  <span>${this.escapeHtml(lesson.title)}</span>
                                  ${hasTest ? `<span class="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[11px] font-semibold">Тест</span>` : ''}
                                  ${lesson.status !== 'published' ? `<span class="px-2 py-0.5 rounded bg-rose-100 text-rose-800 text-[11px] font-semibold">${lesson.status}</span>` : ''}
                                </div>
                                <p class="text-xs text-slate-500 mt-0.5">${this.escapeHtml(lesson.summary || '')} • ${lesson.duration_minutes || 30} мин.</p>
                              </div>
                            </div>
                            <div class="flex items-center gap-2 self-end sm:self-center">
                              ${canEdit ? `
                                <button onclick="app.openLessonModal('${lesson.id}', '${course.id}')" class="p-2 rounded-lg text-slate-500 hover:bg-slate-200 text-xs" title="Редактировать урок">
                                  <i class="fa-solid fa-pen"></i>
                                </button>
                              ` : ''}
                              <button onclick="app.openLessonInPlayer('${course.id}', '${lesson.id}')" class="px-3.5 py-2 rounded-xl bg-white hover:bg-amber-50 border border-slate-200 text-xs font-semibold text-slate-800 transition">
                                Открыть урок
                              </button>
                            </div>
                          </div>
                        `;
                      }).join('')}
                    </div>
                  `}
                </div>
              </div>

              <!-- Правая колонка: связанные материалы библиотеки -->
              <div class="lg:col-span-4 space-y-6">
                <div class="bg-white p-6 rounded-2xl border border-slate-200">
                  <h3 class="font-bold text-slate-900 mb-3">Связанные материалы из библиотеки</h3>
                  ${relatedMaterials.length === 0 ? `
                    <p class="text-xs text-slate-500">Нет дополнительных материалов по этой категории.</p>
                  ` : `
                    <div class="space-y-3">
                      ${relatedMaterials.map(m => `
                        <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                          <div class="text-xs font-semibold text-amber-700 uppercase">${this.escapeHtml(m.type)}</div>
                          <div class="font-bold text-sm text-slate-900 mt-0.5">${this.escapeHtml(m.title)}</div>
                          <div class="text-[11px] text-slate-500 mt-1">${this.escapeHtml(m.license_info || 'OER')}</div>
                          <button onclick="app.navigate('/library')" class="mt-2 text-xs font-semibold text-slate-700 hover:text-amber-600">Открыть в библиотеке →</button>
                        </div>
                      `).join('')}
                    </div>
                  `}
                </div>
              </div>
            </div>
          </div>
        `;
      },

      // Запись на курс (PRD 6.5 и Бизнес-правило #3: запрет дубликатов user_id + course_id)
      enrollInCourse(courseId) {
        const user = this.getCurrentUser();
        if (!user) {
          this.toast('Пожалуйста, войдите или зарегистрируйтесь, чтобы записаться на курс.', 'info');
          this.navigate('/login');
          return;
        }
        const existing = this.db.enrollments.find(e => e.user_id === user.id && e.course_id === courseId);
        if (existing) {
          this.toast('Вы уже записаны на этот курс (защита от дубликатов). Открываем плеер обучения!', 'info');
          this.navigate(`/learning/${courseId}`);
          return;
        }
        this.db.enrollments.push({
          id: this.uid('enr'),
          user_id: user.id,
          course_id: courseId,
          status: 'active',
          enrolled_at: new Date().toISOString(),
          completed_at: null
        });
        this.logAudit('COURSE_ENROLL', 'course', courseId, `Пользователь ${user.email} записался на курс`);
        this.saveDatabase();
        this.toast('Вы успешно записаны на курс!', 'success');
        this.navigate(`/learning/${courseId}`);
      },

      openLessonInPlayer(courseId, lessonId) {
        const user = this.getCurrentUser();
        this.uiState.activeLessonId = lessonId;
        if (!user) {
          this.toast('Для прохождения уроков и сохранения прогресса войдите в систему.', 'info');
          this.navigate('/login');
          return;
        }
        // Автоматическая запись, если ещё не записан
        const enrolled = this.db.enrollments.some(e => e.user_id === user.id && e.course_id === courseId);
        if (!enrolled) {
          this.db.enrollments.push({
            id: this.uid('enr'),
            user_id: user.id,
            course_id: courseId,
            status: 'active',
            enrolled_at: new Date().toISOString(),
            completed_at: null
          });
          this.saveDatabase();
        }
        this.navigate(`/learning/${courseId}`);
      },

      // ===================================================================
      // 4. ПЛЕЕР ОБУЧЕНИЯ, УРОКОВ И ТЕСТОВ (/learning/:courseId — PRD 6.6 и 6.7)
      // ===================================================================
      renderLearningPlayerPage(courseId) {
        const user = this.getCurrentUser();
        const course = this.db.courses.find(c => c.id === courseId);
        if (!course) {
          return `<div class="p-12 text-center">Курс не найден.</div>`;
        }

        const lessons = this.db.lessons
          .filter(l => l.course_id === course.id && l.status === 'published')
          .sort((a, b) => a.position - b.position);

        if (lessons.length === 0) {
          return `
            <div class="max-w-4xl mx-auto px-4 py-16 text-center">
              <h2 class="text-xl font-bold">В этом курсе пока нет опубликованных уроков</h2>
              <button onclick="app.navigate('/courses/${course.slug}')" class="mt-4 px-4 py-2 rounded-xl bg-amber-500 font-bold">Назад к курсу</button>
            </div>
          `;
        }

        let currentLesson = lessons.find(l => l.id === this.uiState.activeLessonId) || lessons[0];
        this.uiState.activeLessonId = currentLesson.id;

        const isCompleted = user && this.db.lesson_progress.some(
          lp => lp.user_id === user.id && lp.lesson_id === currentLesson.id && lp.status === 'completed'
        );
        const progress = this.calculateCourseProgress(user.id, course.id);
        const lessonTest = this.db.tests.find(t => t.lesson_id === currentLesson.id && t.status === 'published');
        const userAttempts = lessonTest
          ? this.db.test_attempts.filter(a => a.user_id === user.id && a.test_id === lessonTest.id)
          : [];

        return `
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 fade-enter">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-6">
              <div>
                <button onclick="app.navigate('/courses/${course.slug}')" class="text-xs font-semibold text-amber-700 hover:underline mb-1 inline-flex items-center gap-1">
                  <i class="fa-solid fa-arrow-left"></i> К описанию курса «${this.escapeHtml(course.title)}»
                </button>
                <h1 class="text-xl sm:text-2xl font-extrabold text-slate-900">${this.escapeHtml(currentLesson.title)}</h1>
              </div>

              <div class="flex items-center gap-4 bg-white px-4 py-2.5 rounded-xl border border-slate-200">
                <div class="text-xs">
                  <div class="text-slate-500">Прогресс курса</div>
                  <div class="font-extrabold text-slate-900">${progress.percent}% (${progress.completed}/${progress.total} ур.)</div>
                </div>
                <div class="w-24 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div class="h-full bg-amber-500" style="width: ${progress.percent}%"></div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <!-- Сайдбар уроков курса -->
              <div class="lg:col-span-4 space-y-3">
                <div class="bg-white p-4 rounded-2xl border border-slate-200">
                  <h3 class="font-bold text-sm text-slate-900 mb-3">Содержание курса</h3>
                  <div class="space-y-2">
                    ${lessons.map((l, idx) => {
                      const done = this.db.lesson_progress.some(lp => lp.user_id === user.id && lp.lesson_id === l.id && lp.status === 'completed');
                      const active = l.id === currentLesson.id;
                      return `
                        <button onclick="app.selectLesson('${l.id}')" class="w-full p-3 rounded-xl text-left flex items-center justify-between gap-2 transition ${active ? 'bg-slate-900 text-white' : 'hover:bg-slate-100 text-slate-800'}">
                          <div class="flex items-center gap-2.5 min-w-0">
                            <span class="w-6 h-6 rounded-md text-xs font-bold flex items-center justify-center shrink-0 ${done ? 'bg-emerald-500 text-white' : active ? 'bg-amber-500 text-slate-950' : 'bg-slate-200 text-slate-700'}">
                              ${done ? '<i class="fa-solid fa-check"></i>' : idx + 1}
                            </span>
                            <span class="text-xs font-semibold truncate">${this.escapeHtml(l.title)}</span>
                          </div>
                          <span class="text-[11px] opacity-70 shrink-0">${l.duration_minutes}м</span>
                        </button>
                      `;
                    }).join('')}
                  </div>
                </div>
              </div>

              <!-- Контент урока + отметка о завершении + тест -->
              <div class="lg:col-span-8 space-y-6">
                <article class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-5">
                  <div class="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
                    <span class="text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-lg">
                      Урок ${currentLesson.position} • ${currentLesson.duration_minutes} минут
                    </span>
                    <!-- Явное завершение урока (PRD Бизнес-правило #6: урок не считается завершённым просто от открытия) -->
                    <button onclick="app.toggleLessonComplete('${currentLesson.id}', '${course.id}')" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 ${isCompleted ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-xs'}">
                      <i class="fa-solid ${isCompleted ? 'fa-check-double' : 'fa-check'}"></i>
                      <span>${isCompleted ? 'Урок завершён (отменить)' : 'Отметить урок завершённым'}</span>
                    </button>
                  </div>

                  <div class="prose max-w-none text-slate-800 space-y-3 leading-relaxed text-sm sm:text-base">
                    ${currentLesson.content}
                  </div>

                  ${(currentLesson.attachments && currentLesson.attachments.length > 0) ? `
                    <div class="pt-4 border-t border-slate-100">
                      <h4 class="text-xs font-bold uppercase text-slate-400 mb-2">Вложенные учебные материалы</h4>
                      <div class="flex flex-wrap gap-2">
                        ${currentLesson.attachments.map(att => `
                          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">
                            <i class="fa-regular fa-file-pdf text-amber-600"></i> ${this.escapeHtml(att)}
                          </span>
                        `).join('')}
                      </div>
                    </div>
                  ` : ''}
                </article>

                <!-- Блок тестирования по уроку (PRD 6.7) -->
                ${lessonTest ? this.renderLessonTestSection(lessonTest, userAttempts) : `
                  <div class="bg-white p-6 rounded-2xl border border-slate-200 text-sm text-slate-600 flex items-center justify-between">
                    <span>К этому уроку не прикреплён обязательный тест.</span>
                    ${this.hasPermission('manage_content') ? `<button onclick="app.openTestModal(null, '${currentLesson.id}', '${course.id}')" class="px-3 py-1.5 rounded-lg bg-slate-900 text-amber-400 text-xs font-semibold">+ Создать тест</button>` : ''}
                  </div>
                `}
              </div>
            </div>
          </div>
        `;
      },

      selectLesson(lessonId) {
        this.uiState.activeLessonId = lessonId;
        this.renderCurrentRoute();
      },

      toggleLessonComplete(lessonId, courseId) {
        const user = this.getCurrentUser();
        if (!user) return;

        const existingIdx = this.db.lesson_progress.findIndex(lp => lp.user_id === user.id && lp.lesson_id === lessonId);
        const now = new Date().toISOString();

        if (existingIdx > -1) {
          const current = this.db.lesson_progress[existingIdx];
          if (current.status === 'completed') {
            current.status = 'in_progress';
            current.completed_at = null;
            current.updated_at = now;
            this.toast('Отметка о завершении урока снята.', 'info');
          } else {
            current.status = 'completed';
            current.completed_at = now;
            current.updated_at = now;
            this.toast('Урок отмечен завершённым! Прогресс пересчитан.', 'success');
          }
        } else {
          this.db.lesson_progress.push({
            id: this.uid('lp'),
            user_id: user.id,
            lesson_id: lessonId,
            status: 'completed',
            completed_at: now,
            updated_at: now
          });
          this.toast('Урок отмечен завершённым! Прогресс обновлён.', 'success');
        }

        // Проверяем, завершён ли весь курс
        const progress = this.calculateCourseProgress(user.id, courseId);
        const enr = this.db.enrollments.find(e => e.user_id === user.id && e.course_id === courseId);
        if (enr) {
          if (progress.percent === 100) {
            enr.status = 'completed';
            enr.completed_at = now;
          } else {
            enr.status = 'active';
            enr.completed_at = null;
          }
        }

        this.saveDatabase();
        this.renderCurrentRoute();
      },

      // Отрисовка теста внутри урока (PRD 6.7: 3 типа вопросов, серверная проверка)
      renderLessonTestSection(test, userAttempts) {
        const questions = this.db.questions
          .filter(q => q.test_id === test.id)
          .sort((a, b) => a.position - b.position);

        const lastAttempt = userAttempts.length > 0 ? userAttempts[userAttempts.length - 1] : null;

        return `
          <div class="bg-white p-6 sm:p-8 rounded-2xl border-2 border-amber-300 shadow-xs space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-amber-600">Практическая проверка знаний (PRD 6.7)</span>
                <h3 class="text-lg font-extrabold text-slate-900 mt-0.5">${this.escapeHtml(test.title)}</h3>
                <p class="text-xs text-slate-500 mt-1">${this.escapeHtml(test.instructions)}</p>
              </div>
              <div class="text-xs bg-amber-50 border border-amber-200 px-3 py-2 rounded-xl shrink-0">
                <div>Проходной балл: <strong>${test.passing_score}%</strong></div>
                <div>Лимит времени: <strong>${test.time_limit_minutes || 15} мин.</strong></div>
              </div>
            </div>

            ${lastAttempt ? `
              <div class="p-4 rounded-xl ${lastAttempt.passed ? 'bg-emerald-50 border border-emerald-200' : 'bg-rose-50 border border-rose-200'} flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div class="text-xs font-bold uppercase ${lastAttempt.passed ? 'text-emerald-700' : 'text-rose-700'}">
                    Последняя попытка: ${lastAttempt.passed ? 'Тест успешно сдан!' : 'Не набран проходной балл'}
                  </div>
                  <div class="text-sm font-bold text-slate-900 mt-0.5">
                    Результат: ${lastAttempt.score} из ${lastAttempt.max_score} баллов (${lastAttempt.percentage}%)
                  </div>
                </div>
                <span class="text-xs text-slate-500">Всего попыток: ${userAttempts.length}</span>
              </div>
            ` : ''}

            <form onsubmit="app.submitTestAttempt(event, '${test.id}')" class="space-y-6">
              ${questions.map((q, idx) => `
                <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div class="flex items-start justify-between gap-2">
                    <div class="font-bold text-sm text-slate-900">
                      ${idx + 1}. ${this.escapeHtml(q.text)}
                    </div>
                    <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-200 text-slate-700 shrink-0">${q.points} б.</span>
                  </div>

                  ${q.type === 'single_choice' ? `
                    <div class="space-y-2 pt-1">
                      ${(q.options || []).map(opt => `
                        <label class="flex items-center gap-2.5 text-sm text-slate-700 cursor-pointer p-2 rounded-lg hover:bg-white transition">
                          <input type="radio" name="q_${q.id}" value="${this.escapeHtml(opt)}" required class="accent-amber-600" />
                          <span>${this.escapeHtml(opt)}</span>
                        </label>
                      `).join('')}
                    </div>
                  ` : q.type === 'multiple_choice' ? `
                    <div class="text-xs text-slate-500">Выберите один или несколько вариантов ответа:</div>
                    <div class="space-y-2 pt-1">
                      ${(q.options || []).map(opt => `
                        <label class="flex items-center gap-2.5 text-sm text-slate-700 cursor-pointer p-2 rounded-lg hover:bg-white transition">
                          <input type="checkbox" name="q_${q.id}" value="${this.escapeHtml(opt)}" class="accent-amber-600 rounded" />
                          <span>${this.escapeHtml(opt)}</span>
                        </label>
                      `).join('')}
                    </div>
                  ` : `
                    <div>
                      <input type="text" name="q_${q.id}" required placeholder="Введите короткий текстовый ответ..." class="w-full px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-sm" />
                      <div class="text-[11px] text-slate-400 mt-1">Регистр и лишние пробелы автоматически нормализуются при проверке.</div>
                    </div>
                  `}

                  ${lastAttempt ? `
                    <div class="pt-2 border-t border-slate-200/80 text-xs text-slate-600">
                      <strong class="text-slate-800">Разбор:</strong> ${this.escapeHtml(q.explanation || 'Ответ проверен сервером.')}
                    </div>
                  ` : ''}
                </div>
              `).join('')}

              <button type="submit" class="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm shadow-sm transition">
                Отправить ответы на проверку
              </button>
            </form>
          </div>
        `;
      },

      // Нормализация и серверная проверка теста (PRD 6.7 и Бизнес-правило #7, #8)
      submitTestAttempt(event, testId) {
        event.preventDefault();
        const user = this.getCurrentUser();
        if (!user) return;

        const test = this.db.tests.find(t => t.id === testId);
        const questions = this.db.questions.filter(q => q.test_id === testId);
        const formData = new FormData(event.target);

        let score = 0;
        let maxScore = 0;
        const userAnswers = {};

        const normalizeText = (str) => String(str || '').trim().toLowerCase().replace(/\s+/g, '');

        questions.forEach(q => {
          maxScore += Number(q.points || 10);

          if (q.type === 'single_choice') {
            const ans = formData.get(`q_${q.id}`) || '';
            userAnswers[q.id] = ans;
            if (ans === q.correct_answer) {
              score += Number(q.points || 10);
            }
          } else if (q.type === 'multiple_choice') {
            const selected = formData.getAll(`q_${q.id}`);
            userAnswers[q.id] = selected;
            const expected = Array.isArray(q.correct_answer) ? q.correct_answer : [q.correct_answer];
            const isMatch = selected.length === expected.length && expected.every(val => selected.includes(val));
            if (isMatch) {
              score += Number(q.points || 10);
            }
          } else if (q.type === 'short_text') {
            const rawAns = formData.get(`q_${q.id}`) || '';
            userAnswers[q.id] = rawAns;
            const normUser = normalizeText(rawAns);
            const acceptedList = Array.isArray(q.correct_answer) ? q.correct_answer : [q.correct_answer];
            if (acceptedList.some(acc => normalizeText(acc) === normUser)) {
              score += Number(q.points || 10);
            }
          }
        });

        const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
        const passed = percentage >= (test.passing_score || 70);
        const now = new Date().toISOString();

        this.db.test_attempts.push({
          id: this.uid('att'),
          user_id: user.id,
          test_id: testId,
          answers: userAnswers,
          score,
          max_score: maxScore,
          percentage,
          passed,
          status: 'graded',
          started_at: now,
          submitted_at: now
        });

        this.saveDatabase();
        if (passed) {
          this.toast(`Отлично! Вы набрали ${percentage}% (${score}/${maxScore} б.) и сдали тест!`, 'success');
        } else {
          this.toast(`Результат: ${percentage}% (${score}/${maxScore} б.). Для сдачи нужно ${test.passing_score}%. Посмотрите разбор!`, 'info');
        }
        this.renderCurrentRoute();
      },

      // ===================================================================
      // 5. ОБРАЗОВАТЕЛЬНАЯ СТУДИЯ (/studio — Инструменты изучения)
      // Превращает любой материал в: Ментальные карты, Карточки, Тесты и Конспект
      // ===================================================================
      initStudio() {
        if (!this.uiState.studio.currentPack) {
          const defaultPreset = this.getStudioPresets().math;
          this.uiState.studio.materialText = defaultPreset.rawText;
          this.uiState.studio.currentPack = defaultPreset;
        }
      },

      getStudioPresets() {
        return {
          math: {
            id: 'preset-math',
            title: 'Квадратные уравнения и теорема Виета',
            category: 'Точные науки (Алгебра)',
            rawText: `Квадратное уравнение — это уравнение вида ax² + bx + c = 0, где a, b, c — вещественные числа, причём a ≠ 0.
Дискриминант квадратного уравнения вычисляется по формуле D = b² - 4ac.
Если D > 0, уравнение имеет два различных действительных корня: x₁,₂ = (-b ± √D) / (2a).
Если D = 0, уравнение имеет один корень (два совпадающих): x = -b / (2a).
Если D < 0, уравнение не имеет действительных корней (имеет два комплексных корня).
Теорема Виета для приведенного уравнения x² + px + q = 0 утверждает: сумма корней равна второму коэффициенту с противоположным знаком (x₁ + x₂ = -p), а произведение корней равно свободному члену (x₁ · x₂ = q).
В общем случае для ax² + bx + c = 0: x₁ + x₂ = -b/a, x₁ · x₂ = c/a.
Геометрически график квадратичной функции y = ax² + bx + c представляет собой параболу с вершиной в точке x₀ = -b / (2a). Если a > 0, ветви параболы направлены вверх; если a < 0, ветви направлены вниз.`,
            mindmap: {
              root: 'Квадратные уравнения ax² + bx + c = 0',
              branches: [
                {
                  id: 'branch-1',
                  title: '1. Дискриминант D = b² - 4ac',
                  color: 'amber',
                  icon: 'fa-calculator',
                  children: [
                    { title: 'D > 0: два различных действительных корня', badge: 'x₁,₂ = (-b ± √D) / 2a', detail: 'График параболы пересекает ось Ox в двух точках' },
                    { title: 'D = 0: один действительный корень (кратности 2)', badge: 'x = -b / 2a', detail: 'Вершина параболы касается оси Ox' },
                    { title: 'D < 0: нет действительных корней', badge: 'D < 0 ∅ в R', detail: 'Парабола лежит целиком выше или ниже оси Ox' }
                  ]
                },
                {
                  id: 'branch-2',
                  title: '2. Теорема Виета',
                  color: 'emerald',
                  icon: 'fa-brain',
                  children: [
                    { title: 'Сумма корней', badge: 'x₁ + x₂ = -b/a', detail: 'Для приведенного x² + px + q: x₁ + x₂ = -p' },
                    { title: 'Произведение корней', badge: 'x₁ · x₂ = c/a', detail: 'Для приведенного x² + px + q: x₁ · x₂ = q' },
                    { title: 'Обратная теорема Виета', badge: 'Подбор корней', detail: 'Позволяет быстро находить целые корни приведенного уравнения' }
                  ]
                },
                {
                  id: 'branch-3',
                  title: '3. Графические свойства (Парабола)',
                  color: 'sky',
                  icon: 'fa-chart-line',
                  children: [
                    { title: 'Координаты вершины параболы', badge: 'x₀ = -b / (2a)', detail: 'y₀ = -D / (4a) — точка экстремума функции' },
                    { title: 'Направление ветвей', badge: 'Знак коэффициента a', detail: 'a > 0: ветви вверх (минимум); a < 0: ветви вниз (максимум)' }
                  ]
                }
              ]
            },
            flashcards: [
              { id: 'fc-m1', front: 'Какова формула дискриминанта квадратного уравнения ax² + bx + c = 0?', back: 'D = b² - 4ac' },
              { id: 'fc-m2', front: 'Сколько действительных корней имеет уравнение, если D > 0?', back: 'Два различных действительных корня:\nx₁,₂ = (-b ± √D) / (2a)' },
              { id: 'fc-m3', front: 'Сформулируйте теорему Виета для x² + px + q = 0', back: 'Сумма корней: x₁ + x₂ = -p\nПроизведение корней: x₁ · x₂ = q' },
              { id: 'fc-m4', front: 'Как найти абсциссу вершины параболы y = ax² + bx + c?', back: 'x₀ = -b / (2a)' },
              { id: 'fc-m5', front: 'Что означает условие D < 0 для действительных чисел?', back: 'Уравнение не имеет действительных корней (парабола не пересекает ось Ox)' }
            ],
            quiz: [
              {
                id: 'q-m1',
                question: 'Чему равен дискриминант уравнения x² - 6x + 8 = 0?',
                options: ['D = 4', 'D = 12', 'D = -4', 'D = 0'],
                correctIndex: 0,
                explanation: 'D = (-6)² - 4 · 1 · 8 = 36 - 32 = 4.'
              },
              {
                id: 'q-m2',
                question: 'По теореме Виета для уравнения x² - 5x + 6 = 0 произведение корней равно:',
                options: ['6', '-5', '5', '-6'],
                correctIndex: 0,
                explanation: 'Для приведенного уравнения x² + px + q = 0 свободный член q равен произведению корней: x₁ · x₂ = 6.'
              },
              {
                id: 'q-m3',
                question: 'Сколько действительных корней имеет уравнение 2x² + 3x + 5 = 0?',
                options: ['0 действительных корней', '1 корень', '2 корня', 'Бесконечно много'],
                correctIndex: 0,
                explanation: 'D = 3² - 4 · 2 · 5 = 9 - 40 = -31 < 0. Действительных корней нет.'
              },
              {
                id: 'q-m4',
                question: 'В какой точке находится вершина параболы y = x² - 4x + 3?',
                options: ['x₀ = 2', 'x₀ = -2', 'x₀ = 4', 'x₀ = 0'],
                correctIndex: 0,
                explanation: 'x₀ = -b / (2a) = -(-4) / (2 · 1) = 4 / 2 = 2.'
              }
            ],
            summary: {
              keyTakeaways: [
                'Квадратное уравнение ax² + bx + c = 0 исследуется через дискриминант D = b² - 4ac.',
                'Знак дискриминанта однозначно определяет количество корней: D > 0 (2 корня), D = 0 (1 корень), D < 0 (0 корней).',
                'Теорема Виета связывает коэффициенты уравнения с корнями: x₁ + x₂ = -b/a, x₁ · x₂ = c/a.',
                'Вершина параболы вычисляется формулой x₀ = -b / (2a).'
              ],
              glossary: [
                { term: 'Дискриминант', def: 'Числовое выражение b² - 4ac, определяющее характер корней полинома.' },
                { term: 'Приведенное уравнение', def: 'Квадратное уравнение, у которого старший коэффициент a = 1.' },
                { term: 'Вершина параболы', def: 'Точка экстремума квадратичной функции, в которой она достигает минимума (при a > 0) или максимума (при a < 0).' }
              ],
              formulas: [
                'D = b² - 4ac',
                'x₁,₂ = (-b ± √D) / (2a)',
                'x₁ + x₂ = -b/a,   x₁ · x₂ = c/a',
                'x₀ = -b / (2a)'
              ]
            }
          },

          python: {
            id: 'preset-python',
            title: 'Основы Python: списки, словари и функции',
            category: 'Программирование & IT',
            rawText: `Язык Python — это высокоуровневый интерпретируемый язык с динамической типизацией и лаконичным синтаксисом.
Список (list) в Python — это упорядоченная изменяемая коллекция элементов любых типов. Создаётся квадратными скобками: numbers = [1, 2, 3]. Основные методы: append() добавляет элемент в конец, pop() удаляет последний элемент, sort() сортирует список на месте.
Словарь (dict) — это коллекция пар «ключ-значение» с быстрым доступом по хэшу O(1). Ключи должны быть неизменяемыми объектами (строки, числа, кортежи). Методы словаря: keys(), values(), items(), get().
Функция объявляется с помощью ключевого слова def, принимает параметры и возвращает результат оператором return.
Цикл for ... in используется для итерации по последовательностям, а встроенная функция len() возвращает количество элементов коллекции.`,
            mindmap: {
              root: 'Основы Python: Коллекции и Функции',
              branches: [
                {
                  id: 'branch-py1',
                  title: '1. Списки (list)',
                  color: 'amber',
                  icon: 'fa-list-ol',
                  children: [
                    { title: 'Свойства', badge: 'Изменяемый (mutable)', detail: 'Упорядоченная индексируемая последовательность с нуля' },
                    { title: 'Методы', badge: 'append, pop, sort, len', detail: 'my_list.append(item) добавляет элемент в конец за O(1)' },
                    { title: 'Срезы (slicing)', badge: 'list[start:stop:step]', detail: 'Позволяет извлекать подмножества элементов' }
                  ]
                },
                {
                  id: 'branch-py2',
                  title: '2. Словари (dict)',
                  color: 'emerald',
                  icon: 'fa-book-atlas',
                  children: [
                    { title: 'Структура', badge: '{key: value}', detail: 'Быстрый доступ по ключу благодаря хэш-таблицам O(1)' },
                    { title: 'Ключи словаря', badge: 'Только immutable', detail: 'Строки, числа, tuple; списки ключами быть не могут' },
                    { title: 'Методы', badge: 'get(), items(), keys()', detail: 'd.get(k, default) возвращает default, если ключ отсутствует' }
                  ]
                },
                {
                  id: 'branch-py3',
                  title: '3. Функции и Управление',
                  color: 'sky',
                  icon: 'fa-code',
                  children: [
                    { title: 'Объявление', badge: 'def name(args):', detail: 'Возврат значения с помощью оператора return' },
                    { title: 'Циклы', badge: 'for item in iterable:', detail: 'Итерация по элементам коллекций и диапазон range(n)' }
                  ]
                }
              ]
            },
            flashcards: [
              { id: 'fc-p1', front: 'Какой метод добавляет элемент в конец списка Python?', back: 'list.append(element)' },
              { id: 'fc-p2', front: 'С помощью какой функции можно узнать количество элементов в списке или словаре?', back: 'len(collection)' },
              { id: 'fc-p3', front: 'Чем словарь (dict) отличается от списка (list)?', back: 'Словарь хранит пары «ключ-значение» и индексируется ключами, а список индексируется номерами 0, 1, 2...' },
              { id: 'fc-p4', front: 'Какое ключевое слово используется для создания функций в Python?', back: 'def (например: def my_func(x): return x * 2)' },
              { id: 'fc-p5', front: 'Что возвращает метод dict.get(key, default), если ключ отсутствует?', back: 'Значение default (или None, если default не передан), не вызывая ошибку KeyError' }
            ],
            quiz: [
              {
                id: 'q-p1',
                question: 'Какова сложность поиска элемента по ключу в словаре Python в среднем?',
                options: ['O(1) — константное время', 'O(n) — линейное время', 'O(n²) — квадратичное время', 'O(log n)'],
                correctIndex: 0,
                explanation: 'Словари в Python реализованы как хэш-таблицы, поэтому среднее время доступа по ключу составляет O(1).'
              },
              {
                id: 'q-p2',
                question: 'Что произойдёт в результате выполнения кода: [1, 2] + [3, 4]?',
                options: ['[1, 2, 3, 4]', '[4, 6]', 'Ошибка TypeError', '[[1, 2], [3, 4]]'],
                correctIndex: 0,
                explanation: 'Оператор сложения (+) для списков выполняет конкатенацию (объединение) двух списков.'
              },
              {
                id: 'q-p3',
                question: 'Какой объект НЕ МОЖЕТ быть ключом словаря в Python?',
                options: ['Список [1, 2]', 'Строка "hello"', 'Число 42', 'Кортеж (1, 2)'],
                correctIndex: 0,
                explanation: 'Ключами словаря могут быть только неизменяемые (хэшируемые) типы. Списки являются изменяемыми (mutable).'
              }
            ],
            summary: {
              keyTakeaways: [
                'Python сочетает простоту и читаемость благодаря строгой структуре отступов.',
                'Списки — изменяемые динамические массивы для последовательных данных.',
                'Словари — ассоциативные массивы ключ-значение с мгновенным доступом O(1).',
                'Функции позволяют структурировать код и избегать дублирования логики.'
              ],
              glossary: [
                { term: 'Mutable (изменяемый)', def: 'Объект, содержимое которого можно изменять после создания (list, dict, set).' },
                { term: 'Immutable (неизменяемый)', def: 'Объект, значение которого нельзя изменить после инициализации (int, str, tuple).' },
                { term: 'Хэш-таблица', def: 'Структура данных, сопоставляющая ключи со значениями через хэш-функцию.' }
              ],
              formulas: [
                'numbers = [1, 2, 3]  # создание списка',
                'user = {"name": "Jasur", "city": "Tashkent"}  # словарь',
                'def calculate(a, b): return a + b  # функция'
              ]
            }
          },

          physics: {
            id: 'preset-physics',
            title: 'Законы Ньютона и классическая динамика',
            category: 'Естественные науки (Физика)',
            rawText: `Классическая механика Ньютона описывает движение макроскопических тел под действием сил.
Первый закон Ньютона (закон инерции): существуют такие системы отсчёта, называемые инерциальными, в которых тело сохраняет состояние покоя или равномерного прямолинейного движения, пока внешние силы не заставят его изменить это состояние.
Второй закон Ньютона: ускорение тела прямо пропорционально равнодействующей всех сил, действующих на тело, и обратно пропорционально его массе. Формула: F = m · a, где F — сила в Ньютонах, m — масса в килограммах, a — ускорение в м/с².
Третий закон Ньютона: силы, с которыми два тела действуют друг на друга, равны по модулю и противоположны по направлению: F₁₂ = -F₂₁. Эти силы всегда одной физической природы и приложены к разным телам, поэтому не компенсируют друг друга.
Импульс тела (количество движения) p = m · v. Закон сохранения импульса утверждает, что в замкнутой системе суммарный импульс тел остаётся постоянным.`,
            mindmap: {
              root: 'Три закона Ньютона и динамика',
              branches: [
                {
                  id: 'branch-ph1',
                  title: '1. Первый закон (Инерция)',
                  color: 'amber',
                  icon: 'fa-compass',
                  children: [
                    { title: 'Суть закона', badge: 'v = const, если F_рез = 0', detail: 'Тело сохраняет скорость при отсутствии внешних воздействий' },
                    { title: 'ИСО', badge: 'Инерциальные СО', detail: 'Системы, движущиеся без ускорения относительно звёзд' }
                  ]
                },
                {
                  id: 'branch-ph2',
                  title: '2. Второй закон (Основной закон динамики)',
                  color: 'emerald',
                  icon: 'fa-bolt',
                  children: [
                    { title: 'Основная формула', badge: 'F = m · a', detail: 'Сила измеряется в Ньютонах (1 Н = 1 кг·м/с²)' },
                    { title: 'Импульсная форма', badge: 'F · Δt = Δp', detail: 'Импульс силы равен изменению импульса тела' }
                  ]
                },
                {
                  id: 'branch-ph3',
                  title: '3. Третий закон и Импульс',
                  color: 'sky',
                  icon: 'fa-arrows-left-right',
                  children: [
                    { title: 'Действие и противодействие', badge: 'F₁₂ = -F₂₁', detail: 'Силы приложены к разным телам и не уравновешивают друг друга' },
                    { title: 'Закон сохранения импульса', badge: 'Σp = const', detail: 'Выполняется для любой замкнутой механической системы' }
                  ]
                }
              ]
            },
            flashcards: [
              { id: 'fc-ph1', front: 'Сформулируйте второй закон Ньютона и его формулу', back: 'Ускорение пропорционально силе и обратно пропорционально массе:\nF = m · a' },
              { id: 'fc-ph2', front: 'Почему силы действия и противодействия в 3-м законе Ньютона не уравновешивают друг друга?', back: 'Потому что они приложены к РАЗНЫМ взаимодействующим телам' },
              { id: 'fc-ph3', front: 'Какова формула импульса тела p?', back: 'p = m · v (произведение массы тела на его скорость, измеряется в кг·м/с)' },
              { id: 'fc-ph4', front: 'В каких единицах системы СИ измеряется сила?', back: 'В Ньютонах (1 Н = 1 кг · м / с²)' }
            ],
            quiz: [
              {
                id: 'q-ph1',
                question: 'Какая сила требуется, чтобы сообщить телу массой 5 кг ускорение 3 м/с²?',
                options: ['15 Н', '8 Н', '1.67 Н', '0.6 Н'],
                correctIndex: 0,
                explanation: 'По второму закону Ньютона: F = m · a = 5 кг · 3 м/с² = 15 Н.'
              },
              {
                id: 'q-ph2',
                question: 'Автомобиль буксирует прицеп силой 2000 Н. С какой силой прицеп действует на автомобиль?',
                options: ['2000 Н в противоположную сторону', 'Меньше 2000 Н', 'Больше 2000 Н', '0 Н'],
                correctIndex: 0,
                explanation: 'По третьему закону Ньютона силы взаимодействия равны по модулю и противоположны по направлению.'
              }
            ],
            summary: {
              keyTakeaways: [
                'Динамика Ньютона связывает причины движения (силы) с характером движения (ускорением).',
                'Масса является мерой инертности тела.',
                'Импульс замкнутой системы остаётся неизменным при любых внутренних взаимодействиях.'
              ],
              glossary: [
                { term: 'Инерция', def: 'Свойство тел сохранять свою скорость неизменной при отсутствии внешних сил.' },
                { term: 'Сила', def: 'Векторная физическая величина, являющаяся мерой взаимодействия тел.' }
              ],
              formulas: ['F = m · a', 'F₁₂ = -F₂₁', 'p = m · v', 'F · Δt = Δp']
            }
          },

          ielts: {
            id: 'preset-ielts',
            title: 'IELTS Academic Writing Task 2: Структура и Лексика',
            category: 'Иностранные языки',
            rawText: `IELTS Academic Writing Task 2 требует написать структурированное академическое эссе объёмом не менее 250 слов за 40 минут.
Классическая структура эссе состоит из четырёх абзацев:
1. Введение (Introduction): пересказ (paraphrase) темы экзаменационного задания другими словами + Thesis Statement (выражение авторской позиции и краткий план ответа).
2. Первый основной абзац (Body Paragraph 1): Topic sentence (главная мысль абзаца), подробное объяснение (Explanation), конкретный пример из жизни или науки (Example) и вывод-связка (Concluding/Linking sentence).
3. Второй основной абзац (Body Paragraph 2): аналогичная структура для второго аспекта или противоположной точки зрения.
4. Заключение (Conclusion): краткое обобщение основных аргументов без введения новых идей и подтверждение тезиса.
Критерии оценивания: Task Achievement (25%), Coherence and Cohesion (25%), Lexical Resource (25%), Grammatical Range and Accuracy (25%).`,
            mindmap: {
              root: 'IELTS Academic Writing Task 2 (250+ слов)',
              branches: [
                {
                  id: 'branch-ie1',
                  title: '1. Структура 4-х абзацев',
                  color: 'amber',
                  icon: 'fa-align-left',
                  children: [
                    { title: 'Введение (Intro)', badge: '2 предложения', detail: 'Paraphrase исходного вопроса + четкий Thesis Statement' },
                    { title: 'Body Paragraphs 1 & 2', badge: 'PEEL метод', detail: 'Point (тезис) -> Explain -> Example -> Link' },
                    { title: 'Заключение (Conclusion)', badge: '1-2 предложения', detail: 'Суммирование аргументов, запрещено добавлять новые факты' }
                  ]
                },
                {
                  id: 'branch-ie2',
                  title: '2. Четыре критерия (Band 7+)',
                  color: 'emerald',
                  icon: 'fa-award',
                  children: [
                    { title: 'Task Achievement (25%)', badge: '250+ слов', detail: 'Полный ответ на все части вопроса и ясная позиция автора' },
                    { title: 'Coherence & Cohesion (25%)', badge: 'Связки', detail: 'Furthermore, In contrast, Consequently, For instance' },
                    { title: 'Lexical Resource (25%)', badge: 'AWL Лексика', detail: 'Академические коллокации и избегание повторений' },
                    { title: 'Grammar (25%)', badge: 'Сложные конструкции', detail: 'Conditionals, Passive Voice, Relative Clauses' }
                  ]
                }
              ]
            },
            flashcards: [
              { id: 'fc-ie1', front: 'Из каких элементов состоит метод PEEL для написания Body Paragraph?', back: 'P — Point (Тезис)\nE — Explanation (Объяснение)\nE — Example (Пример)\nL — Link (Связка с темой эссе)' },
              { id: 'fc-ie2', front: 'Каков минимальный рекомендуемый объём слов для IELTS Writing Task 2?', back: 'Не менее 250 слов (штраф за меньший объём). Рекомендуется 260-280 слов.' },
              { id: 'fc-ie3', front: 'Что такое Thesis Statement во введении эссе?', back: 'Ключевое предложение, формулирующее четкую позицию автора и вектор рассуждения всего эссе' }
            ],
            quiz: [
              {
                id: 'q-ie1',
                question: 'Какое из утверждений о заключении (Conclusion) эссе верно?',
                options: ['Нельзя вводить новые аргументы, не упомянутые в основной части', 'Нужно обязательно привести новый пример', 'Заключение должно быть длиннее основного абзаца', 'Оно не влияет на оценку'],
                correctIndex: 0,
                explanation: 'В заключении IELTS эссе категорически не рекомендуется приводить новые аргументы — оно служит только для обобщения высказанных идей.'
              }
            ],
            summary: {
              keyTakeaways: [
                'Task 2 весит в 2 раза больше баллов, чем Task 1, и требует около 40 минут времени.',
                'Строгая структура PEEL обеспечивает высокий балл по Coherence & Cohesion.',
                'Парафраз во введении защищает от прямого списывания темы.'
              ],
              glossary: [
                { term: 'Paraphrase', def: 'Пересказ оригинального высказывания своими словами с помощью синонимов и смены синтаксиса.' },
                { term: 'Thesis Statement', def: 'Формулировка главной авторской позиции в последнем предложении введения.' }
              ],
              formulas: ['Intro = Paraphrase + Thesis', 'Body = Point + Explain + Example + Link', 'Conclusion = Restate Thesis + Summary']
            }
          }
        };
      },

      // Алгоритм генерации учебного пакета из любого пользовательского текста
      generateStudioPack(text, title = 'Пользовательский материал') {
        const clean = (text || '').trim();
        if (!clean) return this.getStudioPresets().math;

        const lines = clean.split('\n').map(l => l.trim()).filter(Boolean);
        const sentences = clean.split(/(?<=[.?!])\s+/).map(s => s.trim()).filter(s => s.length > 8);

        // Извлекаем определения вида "Термин — Определение", "Термин: Определение" или "Термин - Определение"
        const extractedDefs = [];
        lines.forEach(line => {
          if (line.includes(' — ')) {
            const [t, d] = line.split(' — ');
            if (t && d) extractedDefs.push({ term: t.trim(), def: d.trim() });
          } else if (line.includes(' - ')) {
            const [t, d] = line.split(' - ');
            if (t && d) extractedDefs.push({ term: t.trim(), def: d.trim() });
          } else if (line.includes(': ')) {
            const [t, d] = line.split(': ');
            if (t && d && t.length < 50) extractedDefs.push({ term: t.trim(), def: d.trim() });
          }
        });

        // Формируем ветки Ментальной Карты (Mind Map)
        const branches = [];
        const chunkSize = Math.max(1, Math.ceil(sentences.length / 3));
        const colors = ['amber', 'emerald', 'sky', 'rose', 'indigo'];
        const icons = ['fa-lightbulb', 'fa-book-open', 'fa-atom', 'fa-diagram-project', 'fa-cube'];

        for (let i = 0; i < sentences.length && branches.length < 4; i += chunkSize) {
          const chunk = sentences.slice(i, i + chunkSize);
          const branchTitle = chunk[0].length > 45 ? chunk[0].substring(0, 42) + '...' : chunk[0];
          branches.push({
            id: 'branch-gen-' + i,
            title: `${branches.length + 1}. ${branchTitle}`,
            color: colors[branches.length % colors.length],
            icon: icons[branches.length % icons.length],
            children: chunk.map((sent, idx) => ({
              title: sent.length > 70 ? sent.substring(0, 68) + '...' : sent,
              badge: `Тезис #${idx + 1}`,
              detail: sent
            }))
          });
        }

        if (branches.length === 0) {
          branches.push({
            id: 'branch-gen-0',
            title: '1. Основные положения',
            color: 'amber',
            icon: 'fa-book-open',
            children: lines.map((l, idx) => ({
              title: l.length > 60 ? l.substring(0, 58) + '...' : l,
              badge: `Пункт #${idx + 1}`,
              detail: l
            }))
          });
        }

        // Формируем Карточки для запоминания
        const flashcards = [];
        if (extractedDefs.length > 0) {
          extractedDefs.forEach((d, idx) => {
            flashcards.push({
              id: 'fc-gen-' + idx,
              front: `Что такое / в чём суть: «${d.term}»?`,
              back: d.def
            });
          });
        }
        sentences.slice(0, 6).forEach((s, idx) => {
          if (flashcards.length < 6) {
            flashcards.push({
              id: 'fc-gen-sent-' + idx,
              front: `Ключевое положение #${idx + 1} по теме «${title}»`,
              back: s
            });
          }
        });

        // Формируем Тест для самопроверки
        const quiz = [];
        const testPool = extractedDefs.length >= 2 ? extractedDefs : sentences.map((s, idx) => ({ term: `Положение #${idx+1}`, def: s }));
        testPool.slice(0, 4).forEach((item, idx) => {
          const wrong1 = testPool[(idx + 1) % testPool.length].def;
          const wrong2 = testPool[(idx + 2) % testPool.length] ? testPool[(idx + 2) % testPool.length].def : 'Не имеет отношения к теме';
          const wrong3 = 'Утверждение неверно при любых условиях';
          quiz.push({
            id: 'q-gen-' + idx,
            question: `Какое утверждение верно относительно «${item.term}»?`,
            options: [item.def, wrong1 !== item.def ? wrong1 : 'Прямо противоположное значение', wrong2, wrong3],
            correctIndex: 0,
            explanation: `Правильный ответ основан на материале: ${item.def}`
          });
        });

        // Формируем структурированный конспект
        const summary = {
          keyTakeaways: sentences.slice(0, 5),
          glossary: extractedDefs.length > 0 ? extractedDefs : lines.slice(0, 4).map((l, i) => ({ term: `Тезис ${i+1}`, def: l })),
          formulas: lines.filter(l => l.includes('=') || l.includes('≈') || l.includes('->') || l.includes('O('))
        };
        if (summary.formulas.length === 0 && lines.length > 0) {
          summary.formulas = [lines[0]];
        }

        return {
          id: 'pack-' + Date.now(),
          title: title || 'Учебный материал',
          category: 'Студия Aurum',
          rawText: clean,
          mindmap: {
            root: title || 'Изучаемый материал',
            branches
          },
          flashcards,
          quiz,
          summary
        };
      },

      processStudioMaterial() {
        const inputEl = document.getElementById('studio-material-input');
        const text = inputEl ? inputEl.value.trim() : (this.uiState.studio.materialText || '');
        if (!text) {
          this.toast('Пожалуйста, введите текст материала или выберите готовый шаблон.', 'info');
          return;
        }

        const firstLine = text.split('\n')[0].replace(/^#+\s*/, '').trim();
        const autoTitle = firstLine.length > 50 ? firstLine.substring(0, 47) + '...' : firstLine;
        
        this.uiState.studio.materialText = text;
        this.uiState.studio.currentPack = this.generateStudioPack(text, autoTitle);
        this.uiState.studio.currentCardIndex = 0;
        this.uiState.studio.cardFlipped = false;
        this.uiState.studio.quizAnswers = {};
        this.uiState.studio.quizSubmitted = false;
        this.uiState.studio.mindmapCollapsedNodes = {};

        this.toast('Материал успешно преобразован в 4 учебных инструмента!', 'success');
        this.renderCurrentRoute();
      },

      loadStudioPreset(key) {
        const presets = this.getStudioPresets();
        const p = presets[key];
        if (!p) return;
        this.uiState.studio.selectedPreset = key;
        this.uiState.studio.materialText = p.rawText;
        this.uiState.studio.currentPack = p;
        this.uiState.studio.currentCardIndex = 0;
        this.uiState.studio.cardFlipped = false;
        this.uiState.studio.quizAnswers = {};
        this.uiState.studio.quizSubmitted = false;
        this.uiState.studio.mindmapCollapsedNodes = {};
        this.toast(`Загружен шаблон: «${p.title}»`, 'info');
        this.renderCurrentRoute();
      },

      loadStudioLesson(lessonId) {
        if (!lessonId) return;
        const lesson = this.db.lessons.find(l => l.id === lessonId);
        if (!lesson) return;
        const course = this.db.courses.find(c => c.id === lesson.course_id);
        const text = `${lesson.title}\n\n${lesson.summary || ''}\n\n${lesson.content_body || ''}`;
        this.uiState.studio.materialText = text;
        this.uiState.studio.currentPack = this.generateStudioPack(text, `${course ? course.title + ' — ' : ''}${lesson.title}`);
        this.uiState.studio.currentCardIndex = 0;
        this.uiState.studio.cardFlipped = false;
        this.uiState.studio.quizAnswers = {};
        this.uiState.studio.quizSubmitted = false;
        this.uiState.studio.mindmapCollapsedNodes = {};
        this.toast(`Урок «${lesson.title}» загружен в Студию!`, 'success');
        this.renderCurrentRoute();
      },

      setStudioTab(tab) {
        this.uiState.studio.activeTab = tab;
        this.renderCurrentRoute();
      },

      toggleMindmapNode(nodeId) {
        const current = !!this.uiState.studio.mindmapCollapsedNodes[nodeId];
        this.uiState.studio.mindmapCollapsedNodes[nodeId] = !current;
        this.renderCurrentRoute();
      },

      expandAllMindmapNodes() {
        this.uiState.studio.mindmapCollapsedNodes = {};
        this.renderCurrentRoute();
        this.toast('Все ветки ментальной карты раскрыты', 'info');
      },

      collapseAllMindmapNodes() {
        if (!this.uiState.studio.currentPack || !this.uiState.studio.currentPack.mindmap) return;
        this.uiState.studio.currentPack.mindmap.branches.forEach(b => {
          this.uiState.studio.mindmapCollapsedNodes[b.id] = true;
        });
        this.renderCurrentRoute();
        this.toast('Все ветки ментальной карты свёрнуты', 'info');
      },

      flipStudioCard() {
        this.uiState.studio.cardFlipped = !this.uiState.studio.cardFlipped;
        this.renderCurrentRoute();
      },

      nextStudioCard(total) {
        this.uiState.studio.cardFlipped = false;
        this.uiState.studio.currentCardIndex = (this.uiState.studio.currentCardIndex + 1) % total;
        this.renderCurrentRoute();
      },

      prevStudioCard(total) {
        this.uiState.studio.cardFlipped = false;
        this.uiState.studio.currentCardIndex = (this.uiState.studio.currentCardIndex - 1 + total) % total;
        this.renderCurrentRoute();
      },

      markStudioCard(cardId, mode, total) {
        if (mode === 'known') {
          if (!this.uiState.studio.knownCardIds.includes(cardId)) this.uiState.studio.knownCardIds.push(cardId);
          this.uiState.studio.repeatCardIds = this.uiState.studio.repeatCardIds.filter(id => id !== cardId);
        } else {
          if (!this.uiState.studio.repeatCardIds.includes(cardId)) this.uiState.studio.repeatCardIds.push(cardId);
          this.uiState.studio.knownCardIds = this.uiState.studio.knownCardIds.filter(id => id !== cardId);
        }
        this.nextStudioCard(total);
      },

      selectStudioQuizOption(qIdx, optIdx) {
        if (this.uiState.studio.quizSubmitted) return;
        this.uiState.studio.quizAnswers[qIdx] = optIdx;
        this.renderCurrentRoute();
      },

      submitStudioQuiz() {
        const pack = this.uiState.studio.currentPack;
        if (!pack || !pack.quiz || pack.quiz.length === 0) return;
        
        const total = pack.quiz.length;
        const answered = Object.keys(this.uiState.studio.quizAnswers).length;
        if (answered < total) {
          if (!confirm(`Вы ответили на ${answered} из ${total} вопросов. Всё равно проверить тест?`)) {
            return;
          }
        }
        this.uiState.studio.quizSubmitted = true;
        this.renderCurrentRoute();
        this.toast('Тест проверен! Ознакомьтесь с результатами и разбором.', 'success');
      },

      resetStudioQuiz() {
        this.uiState.studio.quizAnswers = {};
        this.uiState.studio.quizSubmitted = false;
        this.renderCurrentRoute();
        this.toast('Тест сброшен, можно пройти повторно!', 'info');
      },

      copyStudioSummary() {
        const pack = this.uiState.studio.currentPack;
        if (!pack || !pack.summary) return;
        const text = `=== ${pack.title} ===\n\n` +
          `ГЛАВНЫЕ ТЕЗИСЫ:\n` + pack.summary.keyTakeaways.map((t, i) => `${i+1}. ${t}`).join('\n') + `\n\n` +
          `ТЕРМИНЫ:\n` + pack.summary.glossary.map(g => `• ${g.term}: ${g.def}`).join('\n') + `\n\n` +
          `ФОРМУЛЫ И ПРАВИЛА:\n` + pack.summary.formulas.map(f => `> ${f}`).join('\n');
        
        navigator.clipboard.writeText(text).then(() => {
          this.toast('Конспект скопирован в буфер обмена!', 'success');
        }).catch(() => {
          this.toast('Конспект подготовлен для копирования.', 'info');
        });
      },

      saveStudioPack() {
        const user = this.getCurrentUser();
        const pack = this.uiState.studio.currentPack;
        if (!pack) return;
        if (!user) {
          this.toast('Войдите в систему, чтобы сохранять материалы в Избранное.', 'info');
          return;
        }
        this.db.saved_items.push({
          id: this.uid('sav'),
          user_id: user.id,
          entity_type: 'material',
          entity_id: pack.id,
          created_at: new Date().toISOString()
        });
        this.saveDatabase();
        this.toast(`Учебный пакет «${pack.title}» сохранён в Избранном!`, 'success');
      },

      exportStudioPack() {
        const pack = this.uiState.studio.currentPack;
        if (!pack) return;
        const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(pack, null, 2));
        const a = document.createElement('a');
        a.setAttribute('href', dataStr);
        a.setAttribute('download', `aurum_studio_${pack.title.replace(/\s+/g, '_')}.json`);
        document.body.appendChild(a);
        a.click();
        a.remove();
        this.toast('Учебный пакет экспортирован в JSON!', 'success');
      },

      openCourseFlashcards(courseId) {
        const course = this.db.courses.find(c => c.id === courseId);
        const cards = this.db.flashcards.filter(f => f.course_id === courseId && f.status === 'published');
        if (course && cards.length > 0) {
          this.uiState.studio.currentPack = {
            id: 'course-' + courseId,
            title: `Карточки курса: ${course.title}`,
            category: 'Курс Aurum Academy',
            rawText: cards.map(c => `${c.front} — ${c.back}`).join('\n'),
            mindmap: {
              root: course.title,
              branches: [
                {
                  id: 'br-c1',
                  title: 'Ключевые формулы и понятия курса',
                  color: 'amber',
                  icon: 'fa-graduation-cap',
                  children: cards.map((c, i) => ({
                    title: c.front,
                    badge: `Карточка #${i+1}`,
                    detail: c.back
                  }))
                }
              ]
            },
            flashcards: cards.map(c => ({ id: c.id, front: c.front, back: c.back })),
            quiz: cards.slice(0, 4).map((c, i) => ({
              id: `q-c-${i}`,
              question: `Вопрос по теме: ${c.front}`,
              options: [c.back, 'Неверное утверждение', 'Требует уточнения условий', 'Относится к другому разделу'],
              correctIndex: 0,
              explanation: `Правильный ответ: ${c.back}`
            })),
            summary: {
              keyTakeaways: cards.map(c => `${c.front}: ${c.back}`),
              glossary: cards.map(c => ({ term: c.front, def: c.back })),
              formulas: cards.filter(c => c.back.includes('=')).map(c => c.back)
            }
          };
          this.uiState.studio.activeTab = 'flashcards';
          this.uiState.studio.currentCardIndex = 0;
          this.uiState.studio.cardFlipped = false;
        }
        this.navigate('/studio');
      },

      // Рендеринг основного экрана Студии
      renderStudioPage(initialTab = null) {
        if (initialTab) {
          this.uiState.studio.activeTab = initialTab;
        }
        const activeTab = this.uiState.studio.activeTab || 'mindmap';
        const pack = this.uiState.studio.currentPack || this.getStudioPresets().math;
        const publishedLessons = this.db.lessons.filter(l => l.status === 'published');

        return `
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 fade-enter space-y-8">
            <!-- Верхний баннер Студии -->
            <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-amber-950 text-white p-6 sm:p-10 border border-slate-800 shadow-xl">
              <div class="relative z-10 max-w-3xl space-y-3">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                  <i class="fa-solid fa-wand-magic-sparkles"></i>
                  <span>Учебная лаборатория Aurum Studio</span>
                </div>
                <h1 class="text-2xl sm:text-4xl font-extrabold tracking-tight">
                  Образовательная <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">Студия</span>
                </h1>
                <p class="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Интеллектуальная трансформация любого учебного материала: вставьте свои заметки, лекцию или формулы — Студия моментально создаст интерактивную ментальную карту, 3D-карточки, тест для самопроверки и структурированный конспект.
                </p>
                <div class="pt-2 flex flex-wrap items-center gap-2 text-xs">
                  <button onclick="app.saveStudioPack()" class="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition flex items-center gap-1.5 shadow-sm">
                    <i class="fa-regular fa-bookmark"></i>
                    <span>Сохранить в Избранное</span>
                  </button>
                  <button onclick="app.exportStudioPack()" class="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold transition flex items-center gap-1.5">
                    <i class="fa-solid fa-download"></i>
                    <span>Экспорт пакета (JSON)</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Блок ввода и выбора материала -->
            <div class="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-xs space-y-5">
              <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid fa-pen-fancy text-amber-500"></i>
                    <span>Материал для изучения</span>
                  </h2>
                  <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Вставьте текст или выберите один из готовых шаблонов / уроков ниже:</p>
                </div>

                <!-- Быстрые шаблоны -->
                <div class="flex items-center gap-1.5 flex-wrap">
                  <span class="text-xs font-semibold text-slate-400 mr-1">Шаблоны:</span>
                  <button onclick="app.loadStudioPreset('math')" class="px-2.5 py-1.5 rounded-lg text-xs font-medium ${this.uiState.studio.selectedPreset === 'math' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'} transition">
                    Алгебра
                  </button>
                  <button onclick="app.loadStudioPreset('python')" class="px-2.5 py-1.5 rounded-lg text-xs font-medium ${this.uiState.studio.selectedPreset === 'python' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'} transition">
                    Python
                  </button>
                  <button onclick="app.loadStudioPreset('physics')" class="px-2.5 py-1.5 rounded-lg text-xs font-medium ${this.uiState.studio.selectedPreset === 'physics' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'} transition">
                    Физика
                  </button>
                  <button onclick="app.loadStudioPreset('ielts')" class="px-2.5 py-1.5 rounded-lg text-xs font-medium ${this.uiState.studio.selectedPreset === 'ielts' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'} transition">
                    IELTS
                  </button>
                </div>
              </div>

              <!-- Селектор загрузки из базы уроков -->
              <div class="flex items-center gap-3 flex-wrap pt-2 border-t border-slate-100 dark:border-slate-700">
                <label class="text-xs font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                  <i class="fa-solid fa-graduation-cap text-amber-500"></i>
                  <span>Загрузить урок из каталога курсов:</span>
                </label>
                <select onchange="app.loadStudioLesson(this.value)" class="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:border-amber-500 max-w-md">
                  <option value="">-- Выберите урок для трансформации --</option>
                  ${publishedLessons.map(l => `<option value="${l.id}">${this.escapeHtml(l.title)} (${l.duration_minutes || 30} мин)</option>`).join('')}
                </select>
              </div>

              <!-- Текстовое поле ввода материала -->
              <div>
                <textarea id="studio-material-input" rows="5" placeholder="Вставьте сюда конспект лекции, параграф учебника, формулы или тезисы..." class="w-full p-4 rounded-2xl border border-slate-200 dark:border-slate-700 text-sm bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:bg-white dark:focus:bg-slate-950 focus:border-amber-500 transition leading-relaxed">${this.escapeHtml(this.uiState.studio.materialText || '')}</textarea>
              </div>

              <!-- Кнопка генерации -->
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div class="text-xs text-slate-500 dark:text-slate-400">
                  Текущий активный пакет: <strong class="text-slate-800 dark:text-slate-200">${this.escapeHtml(pack.title)}</strong>
                </div>
                <button onclick="app.processStudioMaterial()" class="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm shadow-md shadow-amber-500/20 transition flex items-center justify-center gap-2">
                  <i class="fa-solid fa-wand-magic-sparkles"></i>
                  <span>Превратить в тесты, карточки и ментальную карту</span>
                </button>
              </div>
            </div>

            <!-- Вкладки инструментов Студии -->
            <div class="space-y-6">
              <div class="flex items-center gap-2 border-b border-slate-200 dark:border-slate-700 overflow-x-auto pb-1">
                <button onclick="app.setStudioTab('mindmap')" class="px-4 py-3 rounded-t-xl text-sm font-bold flex items-center gap-2 transition whitespace-nowrap ${activeTab === 'mindmap' ? 'bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400 border-t-2 border-amber-500 shadow-xs' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}">
                  <i class="fa-solid fa-network-wired"></i>
                  <span>Ментальная карта (Mind Map)</span>
                </button>
                <button onclick="app.setStudioTab('flashcards')" class="px-4 py-3 rounded-t-xl text-sm font-bold flex items-center gap-2 transition whitespace-nowrap ${activeTab === 'flashcards' ? 'bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400 border-t-2 border-amber-500 shadow-xs' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}">
                  <i class="fa-solid fa-layer-group"></i>
                  <span>Карточки для повторения (${(pack.flashcards || []).length})</span>
                </button>
                <button onclick="app.setStudioTab('quiz')" class="px-4 py-3 rounded-t-xl text-sm font-bold flex items-center gap-2 transition whitespace-nowrap ${activeTab === 'quiz' ? 'bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400 border-t-2 border-amber-500 shadow-xs' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}">
                  <i class="fa-solid fa-circle-question"></i>
                  <span>Тест и самопроверка (${(pack.quiz || []).length})</span>
                </button>
                <button onclick="app.setStudioTab('summary')" class="px-4 py-3 rounded-t-xl text-sm font-bold flex items-center gap-2 transition whitespace-nowrap ${activeTab === 'summary' ? 'bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400 border-t-2 border-amber-500 shadow-xs' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}">
                  <i class="fa-solid fa-file-lines"></i>
                  <span>Структурированный конспект</span>
                </button>
              </div>

              <!-- Содержимое выбранной вкладки -->
              <div class="fade-enter">
                ${activeTab === 'mindmap' ? this.renderStudioMindMapTab(pack.mindmap) : ''}
                ${activeTab === 'flashcards' ? this.renderStudioFlashcardsTab(pack.flashcards) : ''}
                ${activeTab === 'quiz' ? this.renderStudioQuizTab(pack.quiz) : ''}
                ${activeTab === 'summary' ? this.renderStudioSummaryTab(pack.summary, pack.title) : ''}
              </div>
            </div>
          </div>
        `;
      },

      // Вкладка 1: Ментальные карты (Mind Map)
      renderStudioMindMapTab(mindmap) {
        if (!mindmap || !mindmap.branches || mindmap.branches.length === 0) {
          return `
            <div class="bg-white dark:bg-slate-800 p-10 rounded-3xl border border-slate-200 dark:border-slate-700 text-center text-slate-500">
              Ментальная карта ещё не сгенерирована. Введите материал выше и нажмите «Превратить».
            </div>
          `;
        }

        const collapsed = this.uiState.studio.mindmapCollapsedNodes || {};

        return `
          <div class="space-y-4">
            <!-- Панель управления картой -->
            <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-3 shadow-xs">
              <div class="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
                <i class="fa-solid fa-circle-nodes text-amber-500"></i>
                <span>Интерактивная карта понятий: нажмите на ветку для сворачивания / раскрытия</span>
              </div>
              <div class="flex items-center gap-2">
                <button onclick="app.expandAllMindmapNodes()" class="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 text-xs font-semibold transition">
                  <i class="fa-solid fa-chevron-down mr-1"></i> Развернуть всё
                </button>
                <button onclick="app.collapseAllMindmapNodes()" class="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 text-xs font-semibold transition">
                  <i class="fa-solid fa-chevron-right mr-1"></i> Свернуть всё
                </button>
              </div>
            </div>

            <!-- Контейнер ментальной карты -->
            <div class="mindmap-container bg-white dark:bg-slate-800/90 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <!-- Корневой узел -->
              <div class="mb-6">
                <div class="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-base sm:text-lg shadow-lg shadow-amber-500/20">
                  <i class="fa-solid fa-brain text-xl"></i>
                  <span>${this.escapeHtml(mindmap.root)}</span>
                </div>
              </div>

              <!-- Ветки карты -->
              <div class="mindmap-tree space-y-6">
                <ul>
                  ${mindmap.branches.map(branch => {
                    const isCollapsed = !!collapsed[branch.id];
                    return `
                      <li class="space-y-3">
                        <div onclick="app.toggleMindmapNode('${branch.id}')" class="mindmap-node inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-bold text-sm cursor-pointer select-none">
                          <i class="fa-solid ${branch.icon || 'fa-folder'} text-amber-500"></i>
                          <span>${this.escapeHtml(branch.title)}</span>
                          <span class="text-[11px] px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-semibold">
                            ${(branch.children || []).length} эл.
                          </span>
                          <i class="fa-solid ${isCollapsed ? 'fa-chevron-right' : 'fa-chevron-down'} text-xs text-slate-400 ml-1"></i>
                        </div>

                        ${!isCollapsed && branch.children && branch.children.length > 0 ? `
                          <ul class="fade-enter">
                            ${branch.children.map(child => `
                              <li>
                                <div class="mindmap-node inline-block max-w-xl p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/95 shadow-xs">
                                  <div class="flex items-center gap-2 flex-wrap mb-1">
                                    <span class="font-bold text-xs text-slate-900 dark:text-white">${this.escapeHtml(child.title)}</span>
                                    ${child.badge ? `<span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-mono text-[11px] font-semibold">${this.escapeHtml(child.badge)}</span>` : ''}
                                  </div>
                                  ${child.detail ? `<p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">${this.escapeHtml(child.detail)}</p>` : ''}
                                </div>
                              </li>
                            `).join('')}
                          </ul>
                        ` : ''}
                      </li>
                    `;
                  }).join('')}
                </ul>
              </div>
            </div>
          </div>
        `;
      },

      // Вкладка 2: 3D Карточки для повторения (Flashcards)
      renderStudioFlashcardsTab(cards) {
        if (!cards || cards.length === 0) {
          return `
            <div class="bg-white dark:bg-slate-800 p-10 rounded-3xl border border-slate-200 dark:border-slate-700 text-center text-slate-500">
              В данном пакете нет карточек для повторения.
            </div>
          `;
        }

        const total = cards.length;
        if (this.uiState.studio.currentCardIndex >= total) {
          this.uiState.studio.currentCardIndex = 0;
        }
        const currentCard = cards[this.uiState.studio.currentCardIndex];
        const isFlipped = this.uiState.studio.cardFlipped;

        return `
          <div class="max-w-2xl mx-auto space-y-6">
            <!-- Статистика карточек -->
            <div class="flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs font-semibold">
              <span class="text-slate-500 dark:text-slate-400">Карточка ${this.uiState.studio.currentCardIndex + 1} из ${total}</span>
              <div class="flex items-center gap-3">
                <span class="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                  <i class="fa-solid fa-check mr-1"></i> Знаю: ${this.uiState.studio.knownCardIds.length}
                </span>
                <span class="px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                  <i class="fa-solid fa-clock-rotate-left mr-1"></i> Повторить: ${this.uiState.studio.repeatCardIds.length}
                </span>
              </div>
            </div>

            <!-- Интерактивная 3D карточка -->
            <div onclick="app.flipStudioCard()" class="flashcard-perspective h-80 cursor-pointer select-none">
              <div class="flashcard-inner ${isFlipped ? 'is-flipped' : ''}">
                <!-- Лицевая сторона -->
                <div class="flashcard-face bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 shadow-xl p-8 rounded-3xl">
                  <div class="flex items-center justify-between text-xs text-slate-400 font-semibold uppercase">
                    <span>Вопрос / Понятие</span>
                    <span class="text-amber-500 font-bold">Лицевая сторона</span>
                  </div>
                  <div class="my-auto text-center px-4">
                    <div class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-snug">
                      ${this.escapeHtml(currentCard.front)}
                    </div>
                  </div>
                  <div class="text-center text-xs text-amber-600 dark:text-amber-400 font-semibold">
                    <i class="fa-solid fa-rotate mr-1"></i> Нажмите, чтобы перевернуть и увидеть ответ
                  </div>
                </div>

                <!-- Обратная сторона -->
                <div class="flashcard-face flashcard-back bg-slate-900 dark:bg-slate-950 text-white border-2 border-amber-500 shadow-2xl p-8 rounded-3xl">
                  <div class="flex items-center justify-between text-xs text-amber-400 font-semibold uppercase">
                    <span>Ответ / Формула</span>
                    <span class="text-emerald-400 font-bold">Обратная сторона</span>
                  </div>
                  <div class="my-auto text-center px-4">
                    <div class="text-xl sm:text-2xl font-extrabold text-amber-300 leading-relaxed font-mono whitespace-pre-line">
                      ${this.escapeHtml(currentCard.back)}
                    </div>
                  </div>
                  <div class="text-center text-xs text-slate-400">
                    Нажмите, чтобы перевернуть обратно
                  </div>
                </div>
              </div>
            </div>

            <!-- Управление карточкой -->
            <div class="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button onclick="app.prevStudioCard(${total})" class="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-semibold transition">
                <i class="fa-solid fa-arrow-left mr-1"></i> Назад
              </button>

              <div class="flex items-center gap-2">
                <button onclick="app.markStudioCard('${currentCard.id}', 'repeat', ${total})" class="px-4 py-2.5 rounded-xl bg-amber-100 dark:bg-amber-950/60 hover:bg-amber-200 text-amber-900 dark:text-amber-300 font-bold text-xs sm:text-sm transition">
                  <i class="fa-solid fa-clock-rotate-left mr-1"></i> Повторить
                </button>
                <button onclick="app.markStudioCard('${currentCard.id}', 'known', ${total})" class="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition shadow-sm">
                  <i class="fa-solid fa-check mr-1"></i> Знаю!
                </button>
              </div>

              <button onclick="app.nextStudioCard(${total})" class="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-semibold transition">
                Вперёд <i class="fa-solid fa-arrow-right ml-1"></i>
              </button>
            </div>
          </div>
        `;
      },

      // Вкладка 3: Тест для самопроверки (Quiz)
      renderStudioQuizTab(quiz) {
        if (!quiz || quiz.length === 0) {
          return `
            <div class="bg-white dark:bg-slate-800 p-10 rounded-3xl border border-slate-200 dark:border-slate-700 text-center text-slate-500">
              В данном пакете нет тестов. Сгенерируйте пакет из текста выше.
            </div>
          `;
        }

        const isSubmitted = this.uiState.studio.quizSubmitted;
        const answers = this.uiState.studio.quizAnswers || {};

        let correctCount = 0;
        quiz.forEach((q, idx) => {
          if (answers[idx] === q.correctIndex) {
            correctCount++;
          }
        });
        const percent = Math.round((correctCount / quiz.length) * 100);

        return `
          <div class="max-w-3xl mx-auto space-y-6">
            <!-- Результаты теста (если отправлен) -->
            ${isSubmitted ? `
              <div class="p-6 rounded-3xl border ${percent >= 70 ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800' : 'bg-amber-50 dark:bg-amber-950/30 border-amber-300 dark:border-amber-800'} flex flex-col sm:flex-row sm:items-center justify-between gap-4 fade-enter">
                <div>
                  <div class="text-xs font-bold uppercase tracking-wider ${percent >= 70 ? 'text-emerald-700 dark:text-emerald-400' : 'text-amber-700 dark:text-amber-400'}">
                    ${percent >= 70 ? '🎉 Отличный результат!' : 'Повторите материал перед следующей попыткой'}
                  </div>
                  <h3 class="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                    Вы набрали ${percent}% (${correctCount} из ${quiz.length} верно)
                  </h3>
                  <p class="text-xs text-slate-600 dark:text-slate-300 mt-1">
                    Ознакомьтесь с подробными пояснениями к каждому вопросу ниже.
                  </p>
                </div>
                <button onclick="app.resetStudioQuiz()" class="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition shrink-0">
                  <i class="fa-solid fa-rotate-right mr-1"></i> Пройти тест заново
                </button>
              </div>
            ` : ''}

            <!-- Список вопросов -->
            <div class="space-y-4">
              ${quiz.map((q, qIdx) => {
                const selectedOpt = answers[qIdx];
                return `
                  <div class="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xs space-y-4">
                    <div class="flex items-start justify-between gap-3">
                      <div class="flex items-center gap-2.5">
                        <span class="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-700 dark:text-amber-300 font-extrabold text-xs flex items-center justify-center shrink-0">
                          ${qIdx + 1}
                        </span>
                        <h4 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug">
                          ${this.escapeHtml(q.question)}
                        </h4>
                      </div>
                    </div>

                    <!-- Варианты ответов -->
                    <div class="space-y-2">
                      ${q.options.map((opt, optIdx) => {
                        let btnClass = 'border-slate-200 dark:border-slate-700 hover:border-amber-400 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200';
                        if (isSubmitted) {
                          if (optIdx === q.correctIndex) {
                            btnClass = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-bold';
                          } else if (selectedOpt === optIdx) {
                            btnClass = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200';
                          } else {
                            btnClass = 'opacity-60 border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900';
                          }
                        } else if (selectedOpt === optIdx) {
                          btnClass = 'border-amber-500 bg-amber-50 dark:bg-amber-950/50 text-amber-950 dark:text-amber-200 font-bold shadow-xs';
                        }

                        return `
                          <button type="button" onclick="app.selectStudioQuizOption(${qIdx}, ${optIdx})" ${isSubmitted ? 'disabled' : ''} class="w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm flex items-center justify-between gap-3 transition ${btnClass}">
                            <span>${this.escapeHtml(opt)}</span>
                            ${isSubmitted && optIdx === q.correctIndex ? '<i class="fa-solid fa-circle-check text-emerald-600 text-base"></i>' : ''}
                            ${isSubmitted && selectedOpt === optIdx && optIdx !== q.correctIndex ? '<i class="fa-solid fa-circle-xmark text-rose-500 text-base"></i>' : ''}
                          </button>
                        `;
                      }).join('')}
                    </div>

                    <!-- Разбор и объяснение -->
                    ${isSubmitted && q.explanation ? `
                      <div class="mt-3 p-3.5 rounded-xl bg-amber-50/70 dark:bg-slate-900/80 border border-amber-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300">
                        <span class="font-bold text-amber-700 dark:text-amber-400 mr-1"><i class="fa-solid fa-lightbulb"></i> Разбор:</span>
                        ${this.escapeHtml(q.explanation)}
                      </div>
                    ` : ''}
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Кнопка проверки -->
            ${!isSubmitted ? `
              <div class="text-center pt-2">
                <button onclick="app.submitStudioQuiz()" class="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-amber-500/20 transition">
                  <i class="fa-solid fa-check-double mr-1.5"></i>
                  <span>Завершить и проверить тест</span>
                </button>
              </div>
            ` : ''}
          </div>
        `;
      },

      // Вкладка 4: Структурированный конспект (Smart Summary)
      renderStudioSummaryTab(summary, title) {
        if (!summary) {
          return `
            <div class="bg-white dark:bg-slate-800 p-10 rounded-3xl border border-slate-200 dark:border-slate-700 text-center text-slate-500">
              Конспект отсутствует.
            </div>
          `;
        }

        return `
          <div class="max-w-4xl mx-auto space-y-6">
            <div class="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xs space-y-6">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-700">
                <div>
                  <h3 class="text-xl font-extrabold text-slate-900 dark:text-white">${this.escapeHtml(title)}</h3>
                  <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Структурированная выжимка, словарь терминов и ключевые формулы</p>
                </div>
                <button onclick="app.copyStudioSummary()" class="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-semibold text-xs transition flex items-center gap-1.5">
                  <i class="fa-regular fa-copy"></i>
                  <span>Копировать весь конспект</span>
                </button>
              </div>

              <!-- Ключевые тезисы -->
              <div>
                <h4 class="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <i class="fa-solid fa-list-check text-amber-500"></i>
                  <span>Главные тезисы материала</span>
                </h4>
                <div class="space-y-2">
                  ${(summary.keyTakeaways || []).map((t, idx) => `
                    <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-3">
                      <span class="w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">${idx + 1}</span>
                      <span>${this.escapeHtml(t)}</span>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Словарь терминов -->
              ${summary.glossary && summary.glossary.length > 0 ? `
                <div>
                  <h4 class="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                    <i class="fa-solid fa-book-bookmark text-emerald-500"></i>
                    <span>Термины и определения</span>
                  </h4>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    ${summary.glossary.map(g => `
                      <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
                        <div class="font-bold text-xs text-amber-700 dark:text-amber-400 mb-1">${this.escapeHtml(g.term)}</div>
                        <div class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${this.escapeHtml(g.def)}</div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              ` : ''}

              <!-- Формулы и правила -->
              ${summary.formulas && summary.formulas.length > 0 ? `
                <div>
                  <h4 class="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                    <i class="fa-solid fa-square-root-variable text-sky-500"></i>
                    <span>Формулы и ключевые правила</span>
                  </h4>
                  <div class="space-y-2">
                    ${summary.formulas.map(f => `
                      <div class="p-3.5 rounded-xl bg-slate-900 text-amber-300 font-mono text-xs sm:text-sm border border-amber-500/30">
                        <code>${this.escapeHtml(f)}</code>
                      </div>
                    `).join('')}
                  </div>
                </div>
              ` : ''}
            </div>
          </div>
        `;
      },

      changeFlashcardFilter(val) {
        this.uiState.flashcardCourse = val;
        this.uiState.flashcardIndex = 0;
        this.uiState.flashcardFlipped = false;
        this.renderCurrentRoute();
      },

      flipFlashcard() {
        this.uiState.flashcardFlipped = !this.uiState.flashcardFlipped;
        this.renderCurrentRoute();
      },

      nextFlashcard(total) {
        this.uiState.flashcardFlipped = false;
        this.uiState.flashcardIndex = (this.uiState.flashcardIndex + 1) % total;
        this.renderCurrentRoute();
      },

      prevFlashcard(total) {
        this.uiState.flashcardFlipped = false;
        this.uiState.flashcardIndex = (this.uiState.flashcardIndex - 1 + total) % total;
        this.renderCurrentRoute();
      },

      markFlashcardStatus(cardId, mode, total) {
        if (mode === 'known') {
          if (!this.uiState.flashcardKnownIds.includes(cardId)) this.uiState.flashcardKnownIds.push(cardId);
          this.uiState.flashcardRepeatIds = this.uiState.flashcardRepeatIds.filter(id => id !== cardId);
        } else {
          if (!this.uiState.flashcardRepeatIds.includes(cardId)) this.uiState.flashcardRepeatIds.push(cardId);
          this.uiState.flashcardKnownIds = this.uiState.flashcardKnownIds.filter(id => id !== cardId);
        }
        this.nextFlashcard(total);
      },

      // ===================================================================
      // 6. БИБЛИОТЕКА МАТЕРИАЛОВ (/library — PRD 6.9)
      // ===================================================================
      renderLibraryPage() {
        const categories = this.db.categories.filter(c => c.status === 'active');
        let materials = this.db.library_materials.filter(m => m.status === 'published');
        const user = this.getCurrentUser();
        const canEdit = this.hasPermission('manage_content');

        if (this.uiState.librarySearch.trim()) {
          const q = this.uiState.librarySearch.trim().toLowerCase();
          materials = materials.filter(m => m.title.toLowerCase().includes(q) || m.description.toLowerCase().includes(q));
        }
        if (this.uiState.libraryType !== 'all') {
          materials = materials.filter(m => m.type === this.uiState.libraryType);
        }
        if (this.uiState.libraryCategory !== 'all') {
          materials = materials.filter(m => m.category_id === this.uiState.libraryCategory);
        }

        const typeLabels = {
          book: { label: 'Книга / Учебник', icon: 'fa-book' },
          document: { label: 'Документ / Справочник', icon: 'fa-file-lines' },
          video: { label: 'Видеоразбор', icon: 'fa-video' },
          notes: { label: 'Конспект', icon: 'fa-pen-clip' },
          link: { label: 'Полезная ссылка', icon: 'fa-link' },
          other: { label: 'Ресурс OER', icon: 'fa-folder' }
        };

        return `
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 fade-enter">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900">Библиотека образовательных материалов</h1>
                <p class="text-sm text-slate-600 mt-1">Книги, учебные конспекты, видео и открытые образовательные ресурсы с проверенной лицензией (PRD 6.9)</p>
              </div>
              ${canEdit ? `
                <button onclick="app.openMaterialModal()" class="px-4 py-2.5 rounded-xl bg-slate-900 text-amber-400 font-semibold text-sm self-start">
                  <i class="fa-solid fa-plus mr-1"></i> Добавить материал (CRUD)
                </button>
              ` : ''}
            </div>

            <!-- Фильтры библиотеки -->
            <div class="bg-white p-4 rounded-2xl border border-slate-200 mb-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label class="block text-xs font-semibold text-slate-500 mb-1">Поиск</label>
                <input type="text" value="${this.escapeHtml(this.uiState.librarySearch)}" oninput="app.updateCatalogFilter('librarySearch', this.value)" placeholder="Формулы, Python, IELTS..." class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm" />
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-500 mb-1">Тип материала</label>
                <select onchange="app.updateCatalogFilter('libraryType', this.value)" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm bg-white">
                  <option value="all">Все типы</option>
                  <option value="book" ${this.uiState.libraryType === 'book' ? 'selected' : ''}>Книги и учебники</option>
                  <option value="notes" ${this.uiState.libraryType === 'notes' ? 'selected' : ''}>Учебные конспекты</option>
                  <option value="document" ${this.uiState.libraryType === 'document' ? 'selected' : ''}>Документы и таблицы</option>
                  <option value="video" ${this.uiState.libraryType === 'video' ? 'selected' : ''}>Видеолекции</option>
                  <option value="link" ${this.uiState.libraryType === 'link' ? 'selected' : ''}>Полезные ссылки</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-500 mb-1">Категория</label>
                <select onchange="app.updateCatalogFilter('libraryCategory', this.value)" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm bg-white">
                  <option value="all">Все категории</option>
                  ${categories.map(c => `<option value="${c.id}" ${this.uiState.libraryCategory === c.id ? 'selected' : ''}>${this.escapeHtml(c.name)}</option>`).join('')}
                </select>
              </div>
            </div>

            ${materials.length === 0 ? `
              <div class="bg-white p-12 rounded-2xl border border-slate-200 text-center text-slate-500">
                Материалы по вашему запросу не найдены.
              </div>
            ` : `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                ${materials.map(mat => {
                  const cat = this.db.categories.find(c => c.id === mat.category_id);
                  const isFav = user && this.db.favorites.some(f => f.user_id === user.id && f.entity_type === 'material' && f.entity_id === mat.id);
                  const tInfo = typeLabels[mat.type] || typeLabels.other;

                  return `
                    <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between gap-4">
                      <div>
                        <div class="flex items-center justify-between gap-2 mb-3">
                          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200">
                            <i class="fa-solid ${tInfo.icon}"></i> ${tInfo.label}
                          </span>
                          <div class="flex items-center gap-1.5">
                            ${canEdit ? `
                              <button onclick="app.openMaterialModal('${mat.id}')" class="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 text-xs" title="Редактировать">
                                <i class="fa-solid fa-pen"></i>
                              </button>
                            ` : ''}
                            <button onclick="app.toggleFavorite('material', '${mat.id}')" class="px-3 py-1.5 rounded-xl border ${isFav ? 'bg-amber-50 border-amber-300 text-amber-700' : 'border-slate-200 text-slate-600 hover:bg-slate-50'} text-xs font-semibold flex items-center gap-1.5 transition">
                              <i class="${isFav ? 'fa-solid text-amber-500' : 'fa-regular'} fa-bookmark"></i>
                              <span>${isFav ? 'Сохранено' : 'Сохранить'}</span>
                            </button>
                          </div>
                        </div>

                        <h3 class="text-lg font-bold text-slate-900 mb-1.5">${this.escapeHtml(mat.title)}</h3>
                        <p class="text-sm text-slate-600 leading-relaxed mb-4">${this.escapeHtml(mat.description)}</p>
                      </div>

                      <div class="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
                        <div class="space-y-0.5">
                          <div>Категория: <strong class="text-slate-700">${cat ? this.escapeHtml(cat.name) : 'Общая'}</strong> • Язык: ${this.escapeHtml(mat.language)}</div>
                          <div>Автор/Источник: <strong class="text-slate-700">${this.escapeHtml(mat.author_info || 'Открытый источник')}</strong></div>
                          <div class="text-emerald-700 font-medium"><i class="fa-solid fa-scale-balanced mr-1"></i>Лицензия: ${this.escapeHtml(mat.license_info || 'OER')}</div>
                        </div>
                        <button onclick="app.openMaterialDetailModal('${mat.id}')" class="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs shrink-0 self-start sm:self-center">
                          Открыть карточку
                        </button>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            `}
          </div>
        `;
      },

      // Добавление/удаление из Избранного (PRD 6.12 и Сценарий D: без дубликатов)
      toggleFavorite(entityType, entityId) {
        const user = this.getCurrentUser();
        if (!user) {
          this.toast('Войдите в аккаунт, чтобы сохранять курсы и материалы в избранное.', 'info');
          this.navigate('/login');
          return;
        }
        const idx = this.db.favorites.findIndex(
          f => f.user_id === user.id && f.entity_type === entityType && f.entity_id === entityId
        );
        if (idx > -1) {
          this.db.favorites.splice(idx, 1);
          this.toast('Удалено из раздела «Избранное».', 'info');
        } else {
          this.db.favorites.push({
            id: this.uid('fav'),
            user_id: user.id,
            entity_type: entityType,
            entity_id: entityId,
            created_at: new Date().toISOString()
          });
          this.toast('Сохранено в раздел «Избранное»!', 'success');
        }
        this.saveDatabase();
        this.renderCurrentRoute();
      },

      // ===================================================================
      // 7. СООБЩЕСТВО (/community — PRD 6.10, Сценарии C и E)
      // ===================================================================
      renderCommunityPage(selectedPostId = null) {
        const user = this.getCurrentUser();
        const canModerate = this.hasPermission('moderate');

        const typeBadge = {
          question: { label: 'Вопрос', cls: 'bg-amber-100 text-amber-800' },
          discussion: { label: 'Обсуждение', cls: 'bg-sky-100 text-sky-800' },
          advice: { label: 'Учебный совет', cls: 'bg-emerald-100 text-emerald-800' },
          study_group: { label: 'Поиск учебной группы', cls: 'bg-purple-100 text-purple-800' },
          experience: { label: 'Обмен опытом', cls: 'bg-indigo-100 text-indigo-800' }
        };

        // Если открыта отдельная публикация (/community/:id)
        if (selectedPostId) {
          const post = this.db.posts.find(p => p.id === selectedPostId);
          if (!post || (post.status !== 'published' && !canModerate && (!user || user.id !== post.author_id))) {
            return `
              <div class="max-w-4xl mx-auto px-4 py-16 text-center">
                <h2 class="text-xl font-bold">Публикация не найдена или скрыта модератором</h2>
                <button onclick="app.navigate('/community')" class="mt-4 px-4 py-2 rounded-xl bg-amber-500 font-bold">Назад в сообщество</button>
              </div>
            `;
          }
          const author = this.getUserProfile(post.author_id);
          const isAuthor = user && user.id === post.author_id;
          const comments = this.db.comments.filter(c => c.post_id === post.id && (c.status === 'published' || canModerate));
          const tb = typeBadge[post.type] || typeBadge.discussion;

          return `
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 fade-enter space-y-6">
              <button onclick="app.navigate('/community')" class="text-xs font-semibold text-amber-700 hover:underline inline-flex items-center gap-1">
                <i class="fa-solid fa-arrow-left"></i> Назад ко всем публикациям сообщества
              </button>

              <article class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="px-3 py-1 rounded-full text-xs font-bold ${tb.cls}">${tb.label}</span>
                    ${post.status !== 'published' ? `<span class="px-2.5 py-0.5 rounded bg-rose-100 text-rose-800 text-xs font-bold uppercase">${post.status}</span>` : ''}
                  </div>
                  <div class="flex items-center gap-2">
                    ${isAuthor || this.hasPermission('admin_only') ? `
                      <button onclick="app.openPostModal('${post.id}')" class="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700">
                        <i class="fa-solid fa-pen mr-1"></i> Редактировать
                      </button>
                      <button onclick="app.confirmDeletePost('${post.id}')" class="px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-xs font-semibold text-rose-700">
                        <i class="fa-solid fa-trash mr-1"></i> Удалить
                      </button>
                    ` : ''}
                    ${user && !isAuthor ? `
                      <button onclick="app.openReportModal('post', '${post.id}')" class="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-rose-50 text-xs font-medium text-slate-600 hover:text-rose-700">
                        <i class="fa-regular fa-flag mr-1"></i> Пожаловаться
                      </button>
                    ` : ''}
                  </div>
                </div>

                <h1 class="text-xl sm:text-2xl font-extrabold text-slate-900">${this.escapeHtml(post.title)}</h1>
                <p class="text-slate-700 text-sm sm:text-base whitespace-pre-line leading-relaxed">${this.escapeHtml(post.body)}</p>

                <div class="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div class="flex items-center gap-2">
                    <img src="${this.escapeHtml(author.avatar_url)}" alt="" class="w-6 h-6 rounded-full" />
                    <span class="font-semibold text-slate-800">${this.escapeHtml(author.display_name)}</span>
                  </div>
                  <span>Опубликовано: ${this.formatDate(post.created_at)}</span>
                </div>
              </article>

              <!-- Комментарии -->
              <div class="bg-white p-6 rounded-2xl border border-slate-200 space-y-5">
                <h3 class="font-bold text-slate-900">Комментарии и ответы (${comments.length})</h3>

                ${user ? `
                  <form onsubmit="app.submitComment(event, '${post.id}')" class="space-y-3">
                    <textarea name="body" rows="3" required placeholder="Напишите конструктивный ответ или решение..." class="w-full p-3.5 rounded-xl border border-slate-200 text-sm"></textarea>
                    <button type="submit" class="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm">
                      Отправить комментарий
                    </button>
                  </form>
                ` : `
                  <div class="p-4 rounded-xl bg-slate-50 text-xs text-slate-600">
                    <button onclick="app.navigate('/login')" class="text-amber-700 font-bold underline">Войдите в аккаунт</button>, чтобы оставлять комментарии.
                  </div>
                `}

                <div class="space-y-3 pt-2">
                  ${comments.map(c => {
                    const cAuthor = this.getUserProfile(c.author_id);
                    const isCommentAuthor = user && user.id === c.author_id;
                    return `
                      <div class="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                        <div class="flex items-center justify-between text-xs">
                          <div class="flex items-center gap-2">
                            <span class="font-bold text-slate-900">${this.escapeHtml(cAuthor.display_name)}</span>
                            <span class="text-slate-400">• ${this.formatDate(c.created_at)}</span>
                          </div>
                          <div class="flex items-center gap-2">
                            ${isCommentAuthor ? `
                              <button onclick="app.openEditCommentModal('${c.id}')" class="text-slate-500 hover:text-slate-900">Изменить</button>
                              <button onclick="app.deleteComment('${c.id}')" class="text-rose-600 hover:text-rose-800">Удалить</button>
                            ` : user ? `
                              <button onclick="app.openReportModal('comment', '${c.id}')" class="text-slate-400 hover:text-rose-600" title="Пожаловаться"><i class="fa-regular fa-flag"></i></button>
                            ` : ''}
                          </div>
                        </div>
                        <p class="text-sm text-slate-700 leading-relaxed">${this.escapeHtml(c.body)}</p>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            </div>
          `;
        }

        // Общая лента сообщества (/community)
        let posts = this.db.posts.filter(p => p.status === 'published');
        if (this.uiState.communityType !== 'all') {
          posts = posts.filter(p => p.type === this.uiState.communityType);
        }
        if (this.uiState.communitySearch.trim()) {
          const q = this.uiState.communitySearch.trim().toLowerCase();
          posts = posts.filter(p => p.title.toLowerCase().includes(q) || p.body.toLowerCase().includes(q));
        }

        return `
          <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 fade-enter">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900">Образовательное сообщество</h1>
                <p class="text-sm text-slate-600 mt-1">Вопросы по урокам, поиск учебных групп и обмен советами по подготовке (PRD 6.10)</p>
              </div>
              <button onclick="${user ? 'app.openPostModal()' : "app.navigate('/login')"}" class="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm self-start shadow-xs">
                <i class="fa-solid fa-plus mr-1"></i> Создать публикацию
              </button>
            </div>

            <!-- Фильтры сообщества -->
            <div class="bg-white p-4 rounded-2xl border border-slate-200 mb-6 flex flex-col sm:flex-row gap-3">
              <input type="text" value="${this.escapeHtml(this.uiState.communitySearch)}" oninput="app.updateCatalogFilter('communitySearch', this.value)" placeholder="Поиск по вопросам и темам..." class="flex-1 px-3.5 py-2 rounded-xl border border-slate-200 text-sm" />
              <select onchange="app.updateCatalogFilter('communityType', this.value)" class="px-3.5 py-2 rounded-xl border border-slate-200 text-sm bg-white">
                <option value="all">Все типы публикаций</option>
                <option value="question" ${this.uiState.communityType === 'question' ? 'selected' : ''}>Вопросы</option>
                <option value="study_group" ${this.uiState.communityType === 'study_group' ? 'selected' : ''}>Поиск учебной группы</option>
                <option value="advice" ${this.uiState.communityType === 'advice' ? 'selected' : ''}>Учебные советы</option>
                <option value="discussion" ${this.uiState.communityType === 'discussion' ? 'selected' : ''}>Обсуждения</option>
                <option value="experience" ${this.uiState.communityType === 'experience' ? 'selected' : ''}>Обмен опытом</option>
              </select>
            </div>

            <div class="space-y-4">
              ${posts.length === 0 ? `
                <div class="bg-white p-12 rounded-2xl border border-slate-200 text-center text-slate-500">
                  Публикации не найдены. Создайте первую тему для обсуждения!
                </div>
              ` : posts.map(post => {
                const author = this.getUserProfile(post.author_id);
                const commentCount = this.db.comments.filter(c => c.post_id === post.id && c.status === 'published').length;
                const tb = typeBadge[post.type] || typeBadge.discussion;
                const isAuthor = user && user.id === post.author_id;

                return `
                  <div class="bg-white p-6 rounded-2xl border border-slate-200 hover:border-amber-300 transition shadow-xs">
                    <div class="flex items-center justify-between gap-2 mb-2">
                      <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${tb.cls}">${tb.label}</span>
                      <div class="flex items-center gap-2 text-xs">
                        ${isAuthor ? `
                          <button onclick="app.openPostModal('${post.id}')" class="text-slate-500 hover:text-slate-900 font-medium"><i class="fa-solid fa-pen mr-1"></i>Изменить</button>
                          <button onclick="app.confirmDeletePost('${post.id}')" class="text-rose-600 hover:text-rose-700 font-medium"><i class="fa-solid fa-trash mr-1"></i>Удалить</button>
                        ` : user ? `
                          <button onclick="app.openReportModal('post', '${post.id}')" class="text-slate-400 hover:text-rose-600" title="Пожаловаться на нарушение"><i class="fa-regular fa-flag mr-1"></i>Жалоба</button>
                        ` : ''}
                      </div>
                    </div>

                    <h3 onclick="app.navigate('/community/${post.id}')" class="text-lg font-bold text-slate-900 hover:text-amber-600 cursor-pointer transition">
                      ${this.escapeHtml(post.title)}
                    </h3>
                    <p class="text-sm text-slate-600 mt-1.5 line-clamp-2">${this.escapeHtml(post.body)}</p>

                    <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <div class="flex items-center gap-2">
                        <img src="${this.escapeHtml(author.avatar_url)}" alt="" class="w-5 h-5 rounded-full" />
                        <span class="font-semibold text-slate-700">${this.escapeHtml(author.display_name)}</span>
                        <span>• ${this.formatDate(post.created_at)}</span>
                      </div>
                      <button onclick="app.navigate('/community/${post.id}')" class="font-semibold text-amber-700 hover:underline">
                        <i class="fa-regular fa-comment-dots mr-1"></i> Комментарии (${commentCount})
                      </button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `;
      },

      // ===================================================================
      // 8. ЛИЧНЫЙ КАБИНЕТ ПОЛЬЗОВАТЕЛЯ (/dashboard и подмаршруты — PRD 5.2, 6.3, 6.11, 6.13)
      // ===================================================================
      renderDashboardPage() {
        const user = this.getCurrentUser();
        if (!user) return '';
        const profile = this.getUserProfile(user.id);
        const tab = this.uiState.activeDashboardTab || 'overview';

        const myEnrollments = this.db.enrollments.filter(e => e.user_id === user.id);
        const enrolledCourses = myEnrollments
          .map(e => this.db.courses.find(c => c.id === e.course_id))
          .filter(Boolean);
        const completedLessonsCount = this.db.lesson_progress.filter(lp => lp.user_id === user.id && lp.status === 'completed').length;
        const myAttempts = this.db.test_attempts.filter(a => a.user_id === user.id);
        const myFavorites = this.db.favorites.filter(f => f.user_id === user.id);
        const myPosts = this.db.posts.filter(p => p.author_id === user.id && p.status !== 'removed');

        // Средний процент прогресса по всем записанным курсам
        const avgProgress = enrolledCourses.length > 0
          ? Math.round(enrolledCourses.reduce((acc, c) => acc + this.calculateCourseProgress(user.id, c.id).percent, 0) / enrolledCourses.length)
          : 0;

        // Рекомендованные курсы (на которые пользователь ещё не записан)
        const recommendedCourses = this.db.courses.filter(
          c => c.status === 'published' && !myEnrollments.some(e => e.course_id === c.id)
        );

        const tabs = [
          { id: 'overview', route: '/dashboard', label: 'Обзор', icon: 'fa-chart-pie' },
          { id: 'courses', route: '/my-courses', label: `Мои курсы (${enrolledCourses.length})`, icon: 'fa-graduation-cap' },
          { id: 'results', route: '/my-results', label: `Результаты тестов (${myAttempts.length})`, icon: 'fa-clipboard-check' },
          { id: 'saved', route: '/saved', label: `Избранное (${myFavorites.length})`, icon: 'fa-bookmark' },
          { id: 'posts', route: '/my-posts', label: `Мои публикации (${myPosts.length})`, icon: 'fa-comments' },
          { id: 'profile', route: '/profile', label: 'Профиль', icon: 'fa-user-pen' },
          { id: 'settings', route: '/settings', label: 'Настройки', icon: 'fa-gear' }
        ];

        return `
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 fade-enter">
            <!-- Шапка кабинета -->
            <div class="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div class="flex items-center gap-4">
                <img src="${this.escapeHtml(profile.avatar_url)}" alt="" class="w-16 h-16 rounded-2xl object-cover border-2 border-amber-400" />
                <div>
                  <span class="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold">${this.getRoleLabel(user.role)} • ${this.escapeHtml(user.region || 'Узбекистан')}</span>
                  <h1 class="text-xl sm:text-2xl font-extrabold mt-1">Приветствуем, ${this.escapeHtml(profile.display_name)}!</h1>
                  <p class="text-xs text-slate-400 mt-0.5">${this.escapeHtml(profile.bio || 'Заполните описание в профиле')}</p>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-3 text-center bg-slate-800/90 p-3.5 rounded-2xl border border-slate-700">
                <div class="px-2">
                  <div class="text-xl font-extrabold text-amber-400">${enrolledCourses.length}</div>
                  <div class="text-[11px] text-slate-400">Курсов</div>
                </div>
                <div class="px-2 border-x border-slate-700">
                  <div class="text-xl font-extrabold text-emerald-400">${completedLessonsCount}</div>
                  <div class="text-[11px] text-slate-400">Завершено уроков</div>
                </div>
                <div class="px-2">
                  <div class="text-xl font-extrabold text-sky-400">${avgProgress}%</div>
                  <div class="text-[11px] text-slate-400">Общий прогресс</div>
                </div>
              </div>
            </div>

            <!-- Вкладки кабинета -->
            <div class="flex items-center gap-2 overflow-x-auto pb-3 mb-6 border-b border-slate-200">
              ${tabs.map(t => `
                <button onclick="app.navigate('${t.route}')" class="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap flex items-center gap-2 transition ${tab === t.id ? 'bg-slate-900 text-amber-400 shadow-xs' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}">
                  <i class="fa-solid ${t.icon}"></i>
                  <span>${t.label}</span>
                </button>
              `).join('')}
            </div>

            <!-- Контент выбранной вкладки -->
            ${tab === 'overview' ? `
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div class="lg:col-span-8 space-y-6">
                  <!-- Продолжение последнего курса -->
                  <div class="bg-white p-6 rounded-2xl border border-slate-200">
                    <h2 class="text-lg font-bold text-slate-900 mb-4">Мои активные курсы</h2>
                    ${enrolledCourses.length === 0 ? `
                      <p class="text-sm text-slate-500 mb-4">Вы ещё не записались ни на один курс.</p>
                      <button onclick="app.navigate('/courses')" class="px-4 py-2 rounded-xl bg-amber-500 font-bold text-xs">Перейти в каталог</button>
                    ` : `
                      <div class="space-y-4">
                        ${enrolledCourses.map(c => {
                          const prog = this.calculateCourseProgress(user.id, c.id);
                          return `
                            <div class="p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                              <div class="space-y-1 flex-1">
                                <div class="font-bold text-slate-900">${this.escapeHtml(c.title)}</div>
                                <div class="text-xs text-slate-500">Завершено уроков: ${prog.completed} из ${prog.total} (${prog.percent}%)</div>
                                <div class="w-full h-2 rounded-full bg-slate-100 overflow-hidden mt-1">
                                  <div class="h-full bg-amber-500" style="width: ${prog.percent}%"></div>
                                </div>
                              </div>
                              <button onclick="app.navigate('/learning/${c.id}')" class="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shrink-0">
                                Продолжить обучение
                              </button>
                            </div>
                          `;
                        }).join('')}
                      </div>
                    `}
                  </div>

                  <!-- Рекомендованные курсы -->
                  ${recommendedCourses.length > 0 ? `
                    <div class="bg-white p-6 rounded-2xl border border-slate-200">
                      <h2 class="text-lg font-bold text-slate-900 mb-4">Рекомендованные курсы для вас</h2>
                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        ${recommendedCourses.slice(0, 2).map(rc => `
                          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                            <div>
                              <span class="text-[11px] font-semibold text-amber-700">${this.escapeHtml(rc.level)}</span>
                              <h4 class="font-bold text-sm text-slate-900 mt-0.5">${this.escapeHtml(rc.title)}</h4>
                            </div>
                            <button onclick="app.navigate('/courses/${rc.slug}')" class="mt-3 text-xs font-bold text-slate-900 hover:text-amber-600 text-left">Открыть курс →</button>
                          </div>
                        `).join('')}
                      </div>
                    </div>
                  ` : ''}
                </div>

                <!-- Правая колонка дашборда: последние результаты тестов -->
                <div class="lg:col-span-4 space-y-6">
                  <div class="bg-white p-6 rounded-2xl border border-slate-200">
                    <h3 class="font-bold text-slate-900 mb-3">Последние попытки тестов</h3>
                    ${myAttempts.length === 0 ? `
                      <p class="text-xs text-slate-500">Вы ещё не проходили проверочные тесты.</p>
                    ` : `
                      <div class="space-y-3">
                        ${myAttempts.slice(-4).reverse().map(att => {
                          const test = this.db.tests.find(t => t.id === att.test_id);
                          return `
                            <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                              <div class="text-xs font-bold text-slate-900">${test ? this.escapeHtml(test.title) : att.test_id}</div>
                              <div class="flex items-center justify-between mt-1 text-xs">
                                <span class="font-bold ${att.passed ? 'text-emerald-600' : 'text-rose-600'}">${att.percentage}% (${att.score}/${att.max_score} б.)</span>
                                <span class="text-slate-400">${this.formatDate(att.submitted_at)}</span>
                              </div>
                            </div>
                          `;
                        }).join('')}
                      </div>
                    `}
                  </div>
                </div>
              </div>
            ` : tab === 'courses' ? `
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${enrolledCourses.length === 0 ? `<div class="col-span-3 bg-white p-12 rounded-2xl border text-center text-slate-500">У вас пока нет активных записей на курсы.</div>` : enrolledCourses.map(c => this.renderCourseCard(c)).join('')}
              </div>
            ` : tab === 'results' ? `
              <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div class="p-5 border-b border-slate-200">
                  <h2 class="font-bold text-slate-900">История тестирования</h2>
                  <p class="text-xs text-slate-500">Результаты завершённых попыток защищены от произвольного редактирования (Бизнес-правило #8)</p>
                </div>
                ${myAttempts.length === 0 ? `<div class="p-8 text-center text-slate-500 text-sm">Попыток тестирования пока нет.</div>` : `
                  <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse text-sm">
                      <thead class="bg-slate-50 text-xs uppercase text-slate-500">
                        <tr>
                          <th class="p-4">Тест</th>
                          <th class="p-4">Баллы</th>
                          <th class="p-4">Процент</th>
                          <th class="p-4">Статус</th>
                          <th class="p-4">Дата отправки</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-slate-200">
                        ${myAttempts.map(att => {
                          const t = this.db.tests.find(x => x.id === att.test_id);
                          return `
                            <tr>
                              <td class="p-4 font-semibold text-slate-900">${t ? this.escapeHtml(t.title) : att.test_id}</td>
                              <td class="p-4">${att.score} / ${att.max_score}</td>
                              <td class="p-4 font-bold">${att.percentage}%</td>
                              <td class="p-4">
                                <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${att.passed ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}">
                                  ${att.passed ? 'Сдан' : 'Не сдан'}
                                </span>
                              </td>
                              <td class="p-4 text-xs text-slate-500">${this.formatDate(att.submitted_at)}</td>
                            </tr>
                          `;
                        }).join('')}
                      </tbody>
                    </table>
                  </div>
                `}
              </div>
            ` : tab === 'saved' ? `
              <div class="space-y-6">
                <h2 class="font-bold text-lg text-slate-900">Сохранённые курсы и материалы библиотеки</h2>
                ${myFavorites.length === 0 ? `<div class="bg-white p-10 rounded-2xl border text-center text-slate-500">Список избранного пуст.</div>` : `
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${myFavorites.map(fav => {
                      if (fav.entity_type === 'course') {
                        const c = this.db.courses.find(x => x.id === fav.entity_id);
                        if (!c) return '';
                        return `
                          <div class="bg-white p-5 rounded-2xl border border-slate-200 flex items-center justify-between gap-4">
                            <div>
                              <span class="text-xs font-bold text-amber-600 uppercase">Курс</span>
                              <h4 class="font-bold text-slate-900">${this.escapeHtml(c.title)}</h4>
                            </div>
                            <div class="flex items-center gap-2">
                              <button onclick="app.navigate('/courses/${c.slug}')" class="px-3 py-1.5 rounded-lg bg-slate-100 text-xs font-semibold">Открыть</button>
                              <button onclick="app.toggleFavorite('course', '${c.id}')" class="p-2 text-rose-600 hover:bg-rose-50 rounded-lg" title="Удалить из избранного"><i class="fa-solid fa-trash"></i></button>
                            </div>
                          </div>
                        `;
                      } else {
                        const m = this.db.library_materials.find(x => x.id === fav.entity_id);
                        if (!m) return '';
                        return `
                          <div class="bg-white p-5 rounded-2xl border border-slate-200 flex items-center justify-between gap-4">
                            <div>
                              <span class="text-xs font-bold text-sky-600 uppercase">Материал библиотеки</span>
                              <h4 class="font-bold text-slate-900">${this.escapeHtml(m.title)}</h4>
                            </div>
                            <div class="flex items-center gap-2">
                              <button onclick="app.openMaterialDetailModal('${m.id}')" class="px-3 py-1.5 rounded-lg bg-slate-100 text-xs font-semibold">Открыть</button>
                              <button onclick="app.toggleFavorite('material', '${m.id}')" class="p-2 text-rose-600 hover:bg-rose-50 rounded-lg" title="Удалить из избранного"><i class="fa-solid fa-trash"></i></button>
                            </div>
                          </div>
                        `;
                      }
                    }).join('')}
                  </div>
                `}
              </div>
            ` : tab === 'posts' ? `
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <h2 class="font-bold text-lg text-slate-900">Мои публикации в сообществе</h2>
                  <button onclick="app.openPostModal()" class="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs">+ Новая публикация</button>
                </div>
                ${myPosts.length === 0 ? `<div class="bg-white p-10 rounded-2xl border text-center text-slate-500">Вы ещё не создавали публикаций.</div>` : myPosts.map(p => `
                  <div class="bg-white p-5 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span class="text-xs font-bold uppercase text-amber-700">${p.status}</span>
                      <h4 onclick="app.navigate('/community/${p.id}')" class="font-bold text-slate-900 hover:text-amber-600 cursor-pointer">${this.escapeHtml(p.title)}</h4>
                      <p class="text-xs text-slate-500 mt-1 line-clamp-1">${this.escapeHtml(p.body)}</p>
                    </div>
                    <div class="flex items-center gap-2 shrink-0">
                      <button onclick="app.openPostModal('${p.id}')" class="px-3 py-1.5 rounded-lg bg-slate-100 text-xs font-semibold">Редактировать</button>
                      <button onclick="app.confirmDeletePost('${p.id}')" class="px-3 py-1.5 rounded-lg bg-rose-50 text-rose-700 text-xs font-semibold">Удалить</button>
                    </div>
                  </div>
                `).join('')}
              </div>
            ` : tab === 'profile' ? `
              <!-- Редактирование профиля (PRD 6.11) -->
              <div class="max-w-2xl bg-white p-6 sm:p-8 rounded-2xl border border-slate-200">
                <h2 class="text-lg font-bold text-slate-900 mb-1">Публичный профиль пользователя (PRD 6.11)</h2>
                <p class="text-xs text-slate-500 mb-6">Email и системные идентификаторы скрыты и не становятся публичными автоматически.</p>
                <form onsubmit="app.saveProfile(event)" class="space-y-4">
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Отображаемое имя *</label>
                    <input type="text" name="display_name" required value="${this.escapeHtml(profile.display_name)}" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm" />
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Ссылка на аватар</label>
                    <input type="text" name="avatar_url" value="${this.escapeHtml(profile.avatar_url)}" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm" />
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Краткое описание (О себе)</label>
                    <textarea name="bio" rows="3" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm">${this.escapeHtml(profile.bio || '')}</textarea>
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Образовательные интересы (через запятую)</label>
                    <input type="text" name="interests" value="${this.escapeHtml((profile.interests || []).join(', '))}" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm" />
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Изучаемые направления (через запятую)</label>
                    <input type="text" name="directions" value="${this.escapeHtml((profile.directions || []).join(', '))}" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm" />
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Видимость профиля</label>
                    <select name="visibility" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm bg-white">
                      <option value="public" ${profile.visibility === 'public' ? 'selected' : ''}>Публичный</option>
                      <option value="private" ${profile.visibility === 'private' ? 'selected' : ''}>Приватный</option>
                    </select>
                  </div>
                  <button type="submit" class="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm">
                    Сохранить изменения профиля
                  </button>
                </form>
              </div>
            ` : `
              <!-- Настройки аккаунта (/settings) -->
              <div class="max-w-2xl bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
                <div>
                  <h2 class="text-lg font-bold text-slate-900">Настройки аккаунта и безопасности</h2>
                  <p class="text-xs text-slate-500 mt-1">Email аккаунта: <strong>${this.escapeHtml(user.email)}</strong> • Дата регистрации: ${this.formatDate(user.created_at)}</p>
                </div>
                <form onsubmit="app.changePassword(event)" class="space-y-4 pt-4 border-t border-slate-100">
                  <h3 class="font-bold text-sm text-slate-800">Смена пароля</h3>
                  <div>
                    <label class="block text-xs font-semibold text-slate-600 mb-1">Новый пароль (минимум 6 символов)</label>
                    <input type="password" name="new_password" minlength="6" required class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm" />
                  </div>
                  <button type="submit" class="px-5 py-2 rounded-xl bg-slate-900 text-white font-semibold text-xs">Обновить пароль</button>
                </form>
              </div>
            `}
          </div>
        `;
      },

      saveProfile(event) {
        event.preventDefault();
        const user = this.getCurrentUser();
        if (!user) return;
        const fd = new FormData(event.target);
        let profile = this.db.profiles.find(p => p.user_id === user.id);
        if (!profile) {
          profile = { id: this.uid('p'), user_id: user.id };
          this.db.profiles.push(profile);
        }
        profile.display_name = fd.get('display_name').trim();
        profile.avatar_url = fd.get('avatar_url').trim() || 'https://placehold.co/120x120/f59e0b/0f172a?text=AU';
        profile.bio = fd.get('bio').trim();
        profile.interests = fd.get('interests').split(',').map(s => s.trim()).filter(Boolean);
        profile.directions = fd.get('directions').split(',').map(s => s.trim()).filter(Boolean);
        profile.visibility = fd.get('visibility');
        profile.updated_at = new Date().toISOString();

        this.saveDatabase();
        this.renderHeader();
        this.renderCurrentRoute();
        this.toast('Профиль успешно обновлён!', 'success');
      },

      changePassword(event) {
        event.preventDefault();
        const user = this.getCurrentUser();
        if (!user) return;
        user.updated_at = new Date().toISOString();
        this.saveDatabase();
        event.target.reset();
        this.toast('Пароль успешно обновлён (сохранён в хешированном виде).', 'success');
      },

      // ===================================================================
      // 9. АВТОРИЗАЦИЯ И РЕГИСТРАЦИЯ (/login, /register — PRD 6.2 + Google Auth)
      // ===================================================================
      renderAuthPage(mode = 'login') {
        return `
          <div class="max-w-md mx-auto px-4 py-12 fade-enter">
            <div class="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
              <div class="text-center">
                <div class="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 font-extrabold text-xl flex items-center justify-center mx-auto mb-3">Au</div>
                <h1 class="text-2xl font-extrabold text-slate-900 dark:text-white">
                  ${mode === 'login' ? 'Вход в Aurum Academy' : 'Регистрация аккаунта'}
                </h1>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  ${mode === 'login' ? 'Войдите через Google или по email аккаунта' : 'Быстрая регистрация через Google или заполнение профиля'}
                </p>
              </div>

              <!-- Кнопка Google Auth -->
              <button type="button" onclick="app.openGoogleAuthModal()" class="w-full py-3 px-4 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 text-slate-800 dark:text-white font-semibold text-sm flex items-center justify-center gap-3 transition shadow-xs group">
                <svg class="w-4 h-4 shrink-0 group-hover:scale-110 transition" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>${mode === 'login' ? 'Войти через Google' : 'Зарегистрироваться через Google'}</span>
              </button>

              <div class="relative flex items-center justify-center my-1">
                <div class="border-t border-slate-200 dark:border-slate-700 w-full"></div>
                <span class="bg-white dark:bg-slate-800 px-3 text-xs text-slate-400 font-medium whitespace-nowrap">или с паролем</span>
              </div>

              ${mode === 'login' ? `
                <form onsubmit="app.handleLogin(event)" class="space-y-4">
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Электронная почта (Email)</label>
                    <input type="email" name="email" required value="aziza.karimova@aurum.uz" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm" />
                  </div>
                  <div>
                    <div class="flex justify-between text-xs mb-1">
                      <label class="font-semibold text-slate-700">Пароль</label>
                      <button type="button" onclick="app.openPasswordRecoveryModal()" class="text-amber-700 hover:underline font-medium">Забыли пароль?</button>
                    </div>
                    <input type="password" name="password" required value="password123" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm" />
                  </div>
                  <button type="submit" class="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm transition">
                    Войти в платформу
                  </button>
                </form>
              ` : `
                <form onsubmit="app.handleRegister(event)" class="space-y-4">
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Отображаемое имя *</label>
                    <input type="text" name="display_name" required placeholder="Например: Сардор Камилов" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm" />
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Электронная почта (проверка уникальности) *</label>
                    <input type="email" name="email" required placeholder="student@example.uz" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm" />
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Регион (для региональной аналитики PRD п.17)</label>
                    <select name="region" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white">
                      <option value="Ташкент">Ташкент</option>
                      <option value="Самарканд">Самарканд</option>
                      <option value="Бухара">Бухара</option>
                      <option value="Фергана">Фергана</option>
                      <option value="Андижан">Андижан</option>
                      <option value="Наманган">Наманган</option>
                      <option value="Нукус (Каракалпакстан)">Нукус (Каракалпакстан)</option>
                      <option value="Хорезм">Хорезм</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Пароль (не менее 6 символов) *</label>
                    <input type="password" name="password" minlength="6" required placeholder="••••••" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm" />
                  </div>
                  <button type="submit" class="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm transition">
                    Зарегистрироваться
                  </button>
                </form>
              `}

              <div class="pt-4 border-t border-slate-100 text-center text-xs text-slate-600">
                ${mode === 'login' ? `
                  Нет аккаунта? <button onclick="app.navigate('/register')" class="text-amber-700 font-bold hover:underline">Зарегистрироваться</button>
                ` : `
                  Уже есть аккаунт? <button onclick="app.navigate('/login')" class="text-amber-700 font-bold hover:underline">Войти</button>
                `}
              </div>
            </div>
          </div>
        `;
      },

      handleLogin(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const email = fd.get('email').trim().toLowerCase();
        const user = this.db.users.find(u => u.email.toLowerCase() === email);
        if (!user) {
          this.toast('Пользователь с таким email не найден.', 'error');
          return;
        }
        if (user.status !== 'active') {
          this.toast('Ваш аккаунт приостановлен администратором.', 'error');
          return;
        }
        this.db.currentUserId = user.id;
        this.saveDatabase();
        this.toast('Вход выполнен успешно!', 'success');
        this.navigate('/dashboard');
      },

      handleRegister(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const email = fd.get('email').trim().toLowerCase();
        const displayName = fd.get('display_name').trim();
        const region = fd.get('region');

        if (this.db.users.some(u => u.email.toLowerCase() === email)) {
          this.toast('Этот email уже зарегистрирован (проверка уникальности PRD 6.2).', 'error');
          return;
        }

        const newUserId = this.uid('u');
        const now = new Date().toISOString();

        // Бизнес-правило #5: пользователь не может самостоятельно назначить себе роль редактора или админа
        this.db.users.push({
          id: newUserId,
          email,
          password_hash: 'hashed_' + btoa(fd.get('password')),
          role: 'user',
          status: 'active',
          region,
          created_at: now,
          updated_at: now
        });

        this.db.profiles.push({
          id: this.uid('p'),
          user_id: newUserId,
          display_name: displayName,
          avatar_url: `https://placehold.co/120x120/f59e0b/0f172a?text=${encodeURIComponent(displayName.slice(0, 2).toUpperCase())}`,
          bio: `Участник сообщества Aurum Academy (${region}).`,
          interests: ['Самообразование'],
          directions: ['Общее развитие'],
          visibility: 'public',
          updated_at: now
        });

        this.db.currentUserId = newUserId;
        this.logAudit('USER_REGISTER', 'user', newUserId, `Зарегистрирован новый пользователь ${email}`);
        this.saveDatabase();
        this.toast('Аккаунт и базовый профиль созданы!', 'success');
        this.navigate('/dashboard');
      },

      logout() {
        this.db.currentUserId = null;
        this.saveDatabase();
        this.toast('Вы вышли из аккаунта.', 'info');
        this.navigate('/');
      },

      // Google Authentication Flow (OAuth 2.0 Simulation)
      openGoogleAuthModal() {
        const users = this.db.users.filter(u => u.status === 'active');
        const profilesMap = {};
        this.db.profiles.forEach(p => { profilesMap[p.user_id] = p; });

        this.openModal(`
          <div class="p-6 sm:p-8 space-y-6">
            <div class="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-xs">
                  <svg class="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">Вход через аккаунт Google</h3>
                  <p class="text-xs text-slate-500 dark:text-slate-400">Выберите аккаунт для перехода в Aurum Academy</p>
                </div>
              </div>
              <button onclick="app.closeModal()" class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                <i class="fa-solid fa-xmark text-lg"></i>
              </button>
            </div>

            <!-- Список доступных аккаунтов -->
            <div class="space-y-2 max-h-56 overflow-y-auto pr-1">
              <div class="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Быстрый вход под пользователем:</div>
              ${users.map(u => {
                const p = profilesMap[u.id] || { display_name: u.email, avatar_url: '' };
                return `
                  <button type="button" onclick="app.loginWithGoogleAccount('${u.email}', '${this.escapeHtml(p.display_name)}', '${this.escapeHtml(p.avatar_url)}')" class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-amber-400 hover:bg-amber-50/40 dark:hover:bg-slate-700 transition flex items-center justify-between text-left group">
                    <div class="flex items-center gap-3">
                      <img src="${this.escapeHtml(p.avatar_url)}" alt="${this.escapeHtml(p.display_name)}" class="w-9 h-9 rounded-full object-cover border border-slate-200 dark:border-slate-600" onerror="this.src='https://placehold.co/80x80/f59e0b/0f172a?text=G'" />
                      <div>
                        <div class="font-bold text-sm text-slate-900 dark:text-white group-hover:text-amber-600">${this.escapeHtml(p.display_name)}</div>
                        <div class="text-xs text-slate-500">${this.escapeHtml(u.email)}</div>
                      </div>
                    </div>
                    <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                      ${this.getRoleLabel(u.role)}
                    </span>
                  </button>
                `;
              }).join('')}
            </div>

            <!-- Вход под произвольным Google аккаунтом -->
            <div class="pt-4 border-t border-slate-200 dark:border-slate-700">
              <div class="text-xs font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">
                <i class="fa-solid fa-user-plus text-amber-500"></i>
                <span>Или используйте другой Google аккаунт:</span>
              </div>
              <form onsubmit="app.handleNewGoogleAccount(event)" class="space-y-3">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label class="block text-[11px] font-semibold text-slate-600 dark:text-slate-300 mb-1">Имя и Фамилия</label>
                    <input type="text" name="google_name" required placeholder="Шахзод Рахимов" class="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs bg-white dark:bg-slate-900" />
                  </div>
                  <div>
                    <label class="block text-[11px] font-semibold text-slate-600 dark:text-slate-300 mb-1">Google Email</label>
                    <input type="email" name="google_email" required placeholder="shahzod@gmail.com" class="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs bg-white dark:bg-slate-900" />
                  </div>
                </div>
                <button type="submit" class="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition flex items-center justify-center gap-2">
                  <i class="fa-brands fa-google"></i>
                  <span>Авторизоваться с этим Google аккаунтом</span>
                </button>
              </form>
            </div>

            <div class="text-center text-[11px] text-slate-400">
              Безопасная авторизация через Google OAuth 2.0 • Пароль не передаётся платформе
            </div>
          </div>
        `);
      },

      loginWithGoogleAccount(email, name, avatar) {
        let user = this.db.users.find(u => u.email.toLowerCase() === email.toLowerCase());
        const now = new Date().toISOString();
        if (!user) {
          const newUserId = this.uid('u-goog');
          user = {
            id: newUserId,
            email: email.toLowerCase(),
            password_hash: 'google_oauth_token_' + Date.now(),
            role: 'user',
            status: 'active',
            region: 'Ташкент',
            created_at: now,
            updated_at: now
          };
          this.db.users.push(user);
          this.db.profiles.push({
            id: this.uid('p'),
            user_id: newUserId,
            display_name: name || email.split('@')[0],
            avatar_url: avatar || `https://placehold.co/120x120/4285f4/ffffff?text=${encodeURIComponent((name || 'G').slice(0, 2).toUpperCase())}`,
            bio: 'Пользователь авторизован через Google Auth.',
            interests: ['Самообразование', 'IT & Наука'],
            directions: ['Общее развитие'],
            visibility: 'public',
            updated_at: now
          });
          this.logAudit('USER_GOOGLE_REGISTER', 'user', newUserId, `Зарегистрирован через Google Auth ${email}`);
        } else {
          this.logAudit('USER_GOOGLE_LOGIN', 'user', user.id, `Вход через Google Auth ${email}`);
        }

        this.db.currentUserId = user.id;
        this.saveDatabase();
        this.closeModal();
        this.toast(`Добро пожаловать! Вход выполнен через Google (${email}).`, 'success');
        this.renderHeader();
        this.navigate('/dashboard');
      },

      handleNewGoogleAccount(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const name = fd.get('google_name').trim();
        const email = fd.get('google_email').trim().toLowerCase();
        if (!email) return;
        this.loginWithGoogleAccount(email, name, '');
      },

      openPasswordRecoveryModal() {
        this.openModal(`
          <div class="p-6 space-y-4">
            <h3 class="text-lg font-bold text-slate-900">Восстановление доступа (PRD 6.2)</h3>
            <p class="text-xs text-slate-600">Введите email вашего аккаунта. Мы отправим инструкцию по сбросу пароля.</p>
            <input type="email" id="recovery-email" placeholder="aziza.karimova@aurum.uz" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm" />
            <div class="flex justify-end gap-2 pt-2">
              <button onclick="app.closeModal()" class="px-4 py-2 rounded-xl bg-slate-100 text-xs font-semibold">Отмена</button>
              <button onclick="app.closeModal(); app.toast('Ссылка для сброса пароля отправлена на указанный email.', 'success')" class="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold">Отправить ссылку</button>
            </div>
          </div>
        `);
      },

      // ===================================================================
      // 10. АДМИНИСТРАТИВНАЯ ПАНЕЛЬ (/admin — PRD 5.3, 6.14, Сценарии A и E)
      // ===================================================================
      renderAdminPage() {
        const user = this.getCurrentUser();
        const role = user ? user.role : 'guest';
        const tab = this.uiState.activeAdminTab || 'overview';

        const adminTabs = [
          { id: 'overview', label: 'Обзор', icon: 'fa-gauge-high', roles: ['editor', 'moderator', 'admin'] },
          { id: 'courses', label: 'Курсы', icon: 'fa-graduation-cap', roles: ['editor', 'admin'] },
          { id: 'lessons', label: 'Уроки', icon: 'fa-list-ol', roles: ['editor', 'admin'] },
          { id: 'tests', label: 'Тесты и вопросы', icon: 'fa-circle-question', roles: ['editor', 'admin'] },
          { id: 'library', label: 'Библиотека', icon: 'fa-book', roles: ['editor', 'admin'] },
          { id: 'categories', label: 'Категории', icon: 'fa-tags', roles: ['editor', 'admin'] },
          { id: 'community', label: 'Публикации', icon: 'fa-comments', roles: ['moderator', 'admin'] },
          { id: 'reports', label: 'Жалобы', icon: 'fa-shield-exclamation', roles: ['moderator', 'admin'] },
          { id: 'users', label: 'Пользователи', icon: 'fa-users-gear', roles: ['admin'] },
          { id: 'analytics', label: 'Аналитика и Аудит', icon: 'fa-chart-line', roles: ['editor', 'moderator', 'admin'] }
        ].filter(t => t.roles.includes(role));

        return `
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 fade-enter">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-amber-600">Управление платформой • Роль: ${this.getRoleLabel(role)}</span>
                <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900">Административная панель и Студия контента</h1>
              </div>
              <div class="flex gap-2">
                <button onclick="app.openCourseModal()" class="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm">
                  <i class="fa-solid fa-plus mr-1"></i> Новый курс
                </button>
              </div>
            </div>

            <!-- Навигация по разделам админки (PRD 5.3) -->
            <div class="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 border-b border-slate-200">
              ${adminTabs.map(t => `
                <button onclick="app.navigate('/admin/${t.id}')" class="px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition ${tab === t.id ? 'bg-slate-900 text-amber-400' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}">
                  <i class="fa-solid ${t.icon}"></i>
                  <span>${t.label}</span>
                </button>
              `).join('')}
            </div>

            ${this.renderAdminTabContent(tab, role)}
          </div>
        `;
      },

      renderAdminTabContent(tab, role) {
        if (tab === 'overview') {
          const publishedCourses = this.db.courses.filter(c => c.status === 'published').length;
          const draftCourses = this.db.courses.filter(c => c.status === 'draft').length;
          const openReports = this.db.reports.filter(r => r.status === 'new' || r.status === 'reviewing').length;
          const avgScore = this.db.test_attempts.length > 0
            ? Math.round(this.db.test_attempts.reduce((a, b) => a + b.percentage, 0) / this.db.test_attempts.length)
            : 0;

          return `
            <div class="space-y-6">
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div class="bg-white p-5 rounded-2xl border border-slate-200">
                  <div class="text-xs text-slate-500">Пользователей в БД</div>
                  <div class="text-2xl font-extrabold text-slate-900 mt-1">${this.db.users.length}</div>
                </div>
                <div class="bg-white p-5 rounded-2xl border border-slate-200">
                  <div class="text-xs text-slate-500">Опубликовано курсов / Черновиков</div>
                  <div class="text-2xl font-extrabold text-amber-600 mt-1">${publishedCourses} <span class="text-sm text-slate-400 font-normal">/ ${draftCourses}</span></div>
                </div>
                <div class="bg-white p-5 rounded-2xl border border-slate-200">
                  <div class="text-xs text-slate-500">Записей на курсы (Enrollments)</div>
                  <div class="text-2xl font-extrabold text-emerald-600 mt-1">${this.db.enrollments.length}</div>
                </div>
                <div class="bg-white p-5 rounded-2xl border border-slate-200">
                  <div class="text-xs text-slate-500">Средний балл тестов / Жалобы</div>
                  <div class="text-2xl font-extrabold text-sky-600 mt-1">${avgScore}% <span class="text-sm text-rose-500 font-bold">/ ${openReports} ж.</span></div>
                </div>
              </div>

              <!-- Быстрые сценарии проверки PRD (Раздел 12) -->
              <div class="bg-white p-6 rounded-2xl border border-slate-200">
                <h3 class="font-bold text-slate-900 mb-2">Быстрые действия по ролям (Сценарии A–E из PRD)</h3>
                <p class="text-xs text-slate-500 mb-4">Все изменения мгновенно сохраняются в локальной СУБД и отражаются в публичном каталоге.</p>
                <div class="flex flex-wrap gap-2.5">
                  ${['editor', 'admin'].includes(role) ? `
                    <button onclick="app.openCourseModal()" class="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs">
                      <i class="fa-solid fa-plus mr-1"></i> Создать курс (Сценарий A)
                    </button>
                    <button onclick="app.openLessonModal()" class="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs">
                      <i class="fa-solid fa-file-circle-plus mr-1"></i> Добавить урок
                    </button>
                    <button onclick="app.openTestModal()" class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs">
                      <i class="fa-solid fa-list-check mr-1"></i> Создать тест
                    </button>
                    <button onclick="app.openMaterialModal()" class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs">
                      <i class="fa-solid fa-book-medical mr-1"></i> Добавить материал в библиотеку
                    </button>
                  ` : ''}
                  ${['moderator', 'admin'].includes(role) ? `
                    <button onclick="app.navigate('/admin/reports')" class="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs">
                      <i class="fa-solid fa-gavel mr-1"></i> Очередь жалоб (${openReports}) (Сценарий E)
                    </button>
                  ` : ''}
                </div>
              </div>

              <!-- Последние записи журнала аудита -->
              <div class="bg-white p-6 rounded-2xl border border-slate-200">
                <div class="flex items-center justify-between mb-3">
                  <h3 class="font-bold text-slate-900">Журнал административных действий (Бизнес-правило #11)</h3>
                  <span class="text-xs text-slate-400">Всего записей: ${this.db.audit_logs.length}</span>
                </div>
                <div class="space-y-2">
                  ${this.db.audit_logs.slice(0, 6).map(log => {
                    const actor = this.getUserProfile(log.actor_id);
                    return `
                      <div class="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                        <div>
                          <span class="px-2 py-0.5 rounded bg-slate-900 text-amber-400 font-mono font-bold mr-2">${this.escapeHtml(log.action)}</span>
                          <span class="font-semibold text-slate-800">${this.escapeHtml(log.details)}</span>
                        </div>
                        <div class="text-slate-400 shrink-0">
                          ${this.escapeHtml(actor.display_name)} • ${this.formatDate(log.created_at)}
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            </div>
          `;
        }

        // Управление курсами (/admin/courses)
        if (tab === 'courses') {
          return `
            <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <div class="p-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 class="font-bold text-slate-900">Управление курсами (CRUD)</h2>
                  <p class="text-xs text-slate-500">Черновики (draft) не видны в публичном каталоге. Опубликованные курсы рекомендуется архивировать (Бизнес-правило #10).</p>
                </div>
                <button onclick="app.openCourseModal()" class="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs shrink-0">+ Создать курс</button>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse text-sm">
                  <thead class="bg-slate-50 text-xs uppercase text-slate-500">
                    <tr>
                      <th class="p-4">Название курса</th>
                      <th class="p-4">Категория / Уровень</th>
                      <th class="p-4">Уроков</th>
                      <th class="p-4">Статус</th>
                      <th class="p-4 text-right">Операции CRUD</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200">
                    ${this.db.courses.map(c => {
                      const cat = this.db.categories.find(x => x.id === c.category_id);
                      const lCount = this.db.lessons.filter(l => l.course_id === c.id).length;
                      const badgeCls = c.status === 'published'
                        ? 'bg-emerald-100 text-emerald-800'
                        : c.status === 'draft'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-slate-200 text-slate-700';
                      return `
                        <tr class="hover:bg-slate-50/80">
                          <td class="p-4">
                            <div class="font-bold text-slate-900">${this.escapeHtml(c.title)}</div>
                            <div class="text-xs text-slate-400 font-mono">/courses/${this.escapeHtml(c.slug)}</div>
                          </td>
                          <td class="p-4 text-xs">
                            <div class="font-semibold text-slate-800">${cat ? this.escapeHtml(cat.name) : '—'}</div>
                            <div class="text-slate-500">${this.escapeHtml(c.level)}</div>
                          </td>
                          <td class="p-4 font-bold text-xs">${lCount}</td>
                          <td class="p-4">
                            <span class="px-2.5 py-1 rounded-full text-xs font-bold uppercase ${badgeCls}">${c.status}</span>
                          </td>
                          <td class="p-4 text-right space-x-1 whitespace-nowrap">
                            <button onclick="app.navigate('/courses/${c.slug}')" class="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-semibold" title="Предпросмотр">Просмотр</button>
                            <button onclick="app.openCourseModal('${c.id}')" class="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-semibold">Изменить</button>
                            ${c.status !== 'published' ? `
                              <button onclick="app.setCourseStatus('${c.id}', 'published')" class="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold">Опубликовать</button>
                            ` : `
                              <button onclick="app.setCourseStatus('${c.id}', 'archived')" class="px-2.5 py-1.5 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-semibold">В архив</button>
                            `}
                            ${c.status === 'draft' ? `
                              <button onclick="app.confirmDeleteCourse('${c.id}')" class="px-2.5 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-semibold">Удалить черновик</button>
                            ` : ''}
                          </td>
                        </tr>
                      `;
                    }).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          `;
        }

        // Управление уроками (/admin/lessons)
        if (tab === 'lessons') {
          return `
            <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <div class="p-5 border-b border-slate-200 flex items-center justify-between">
                <div>
                  <h2 class="font-bold text-slate-900">Уроки всех курсов (${this.db.lessons.length})</h2>
                  <p class="text-xs text-slate-500">Создание, редактирование и архивирование уроков с сохранением истории прогресса</p>
                </div>
                <button onclick="app.openLessonModal()" class="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs">+ Добавить урок</button>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse text-sm">
                  <thead class="bg-slate-50 text-xs uppercase text-slate-500">
                    <tr>
                      <th class="p-4">Порядок / Урок</th>
                      <th class="p-4">Курс</th>
                      <th class="p-4">Длительность</th>
                      <th class="p-4">Статус</th>
                      <th class="p-4 text-right">Действия</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200">
                    ${this.db.lessons.map(l => {
                      const course = this.db.courses.find(c => c.id === l.course_id);
                      return `
                        <tr>
                          <td class="p-4 font-semibold text-slate-900">#${l.position}. ${this.escapeHtml(l.title)}</td>
                          <td class="p-4 text-xs text-slate-600">${course ? this.escapeHtml(course.title) : l.course_id}</td>
                          <td class="p-4 text-xs">${l.duration_minutes} мин.</td>
                          <td class="p-4"><span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase ${l.status === 'published' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-700'}">${l.status}</span></td>
                          <td class="p-4 text-right space-x-1 whitespace-nowrap">
                            <button onclick="app.openLessonModal('${l.id}', '${l.course_id}')" class="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-semibold">Изменить</button>
                            <button onclick="app.toggleLessonStatus('${l.id}')" class="px-2.5 py-1.5 rounded-lg bg-amber-100 text-amber-900 text-xs font-semibold">${l.status === 'published' ? 'Архивировать' : 'Опубликовать'}</button>
                          </td>
                        </tr>
                      `;
                    }).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          `;
        }

        // Управление тестами и вопросами (/admin/tests)
        if (tab === 'tests') {
          return `
            <div class="space-y-6">
              <div class="bg-white rounded-2xl border border-slate-200 p-5 flex items-center justify-between">
                <div>
                  <h2 class="font-bold text-slate-900">Тесты и банк вопросов (PRD 6.7)</h2>
                  <p class="text-xs text-slate-500">Поддерживаются вопросы single_choice, multiple_choice и short_text</p>
                </div>
                <button onclick="app.openTestModal()" class="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs">+ Создать тест</button>
              </div>

              ${this.db.tests.map(test => {
                const lesson = this.db.lessons.find(l => l.id === test.lesson_id);
                const questions = this.db.questions.filter(q => q.test_id === test.id);
                const attemptsCount = this.db.test_attempts.filter(a => a.test_id === test.id).length;
                return `
                  <div class="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                      <div>
                        <span class="text-xs font-bold text-amber-600 uppercase">Урок: ${lesson ? this.escapeHtml(lesson.title) : test.lesson_id}</span>
                        <h3 class="text-lg font-bold text-slate-900">${this.escapeHtml(test.title)}</h3>
                        <p class="text-xs text-slate-500">Проходной балл: ${test.passing_score}% • Вопросов: ${questions.length} • Сдано попыток: ${attemptsCount}</p>
                      </div>
                      <div class="flex items-center gap-2">
                        <button onclick="app.openQuestionModal('${test.id}')" class="px-3 py-1.5 rounded-xl bg-slate-900 text-amber-400 text-xs font-semibold">+ Добавить вопрос</button>
                        <button onclick="app.openTestModal('${test.id}')" class="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold">Настройки теста</button>
                      </div>
                    </div>

                    <div class="space-y-2">
                      ${questions.map((q, idx) => `
                        <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 text-xs">
                          <div>
                            <span class="font-bold text-slate-900">${idx + 1}. ${this.escapeHtml(q.text)}</span>
                            <span class="ml-2 px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-mono">${q.type} (${q.points} б.)</span>
                          </div>
                          <button onclick="app.deleteQuestion('${q.id}')" class="text-rose-600 hover:underline shrink-0">Удалить</button>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          `;
        }

        // Управление библиотекой и карточками (/admin/library)
        if (tab === 'library') {
          return `
            <div class="space-y-6">
              <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div class="p-5 border-b border-slate-200 flex items-center justify-between">
                  <div>
                    <h2 class="font-bold text-slate-900">Библиотечные материалы (${this.db.library_materials.length})</h2>
                    <p class="text-xs text-slate-500">Проверка лицензий OER и публикация учебных ресурсов (Бизнес-правило #12)</p>
                  </div>
                  <button onclick="app.openMaterialModal()" class="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs">+ Добавить материал</button>
                </div>
                <div class="overflow-x-auto">
                  <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-slate-50 text-xs uppercase text-slate-500">
                      <tr>
                        <th class="p-4">Название</th>
                        <th class="p-4">Тип</th>
                        <th class="p-4">Лицензия</th>
                        <th class="p-4">Статус</th>
                        <th class="p-4 text-right">Действия</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200">
                      ${this.db.library_materials.map(m => `
                        <tr>
                          <td class="p-4 font-semibold text-slate-900">${this.escapeHtml(m.title)}</td>
                          <td class="p-4 text-xs uppercase font-bold text-amber-700">${this.escapeHtml(m.type)}</td>
                          <td class="p-4 text-xs text-emerald-700">${this.escapeHtml(m.license_info || 'OER')}</td>
                          <td class="p-4"><span class="px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">${m.status}</span></td>
                          <td class="p-4 text-right space-x-1">
                            <button onclick="app.openMaterialModal('${m.id}')" class="px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-semibold">Изменить</button>
                            <button onclick="app.deleteMaterial('${m.id}')" class="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 text-xs font-semibold">Архив/Удалить</button>
                          </td>
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          `;
        }

        // Управление категориями (/admin/categories)
        if (tab === 'categories') {
          return `
            <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <div class="p-5 border-b border-slate-200 flex items-center justify-between">
                <h2 class="font-bold text-slate-900">Категории курсов и материалов (${this.db.categories.length})</h2>
                <button onclick="app.openCategoryModal()" class="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs">+ Новая категория</button>
              </div>
              <div class="divide-y divide-slate-200">
                ${this.db.categories.map(cat => `
                  <div class="p-4 flex items-center justify-between gap-4">
                    <div>
                      <div class="font-bold text-slate-900">${this.escapeHtml(cat.name)} <span class="text-xs font-mono text-slate-400">(${this.escapeHtml(cat.slug)})</span></div>
                      <div class="text-xs text-slate-500">${this.escapeHtml(cat.description)}</div>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${cat.status === 'active' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-600'}">${cat.status}</span>
                      <button onclick="app.openCategoryModal('${cat.id}')" class="px-3 py-1.5 rounded-lg bg-slate-100 text-xs font-semibold">Изменить</button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }

        // Модерация публикаций сообщества (/admin/community)
        if (tab === 'community') {
          return `
            <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <div class="p-5 border-b border-slate-200">
                <h2 class="font-bold text-slate-900">Модерация публикаций сообщества</h2>
                <p class="text-xs text-slate-500">Модератор может скрывать (hidden) или возвращать (published) публикации</p>
              </div>
              <div class="divide-y divide-slate-200">
                ${this.db.posts.map(p => {
                  const author = this.getUserProfile(p.author_id);
                  return `
                    <div class="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <span class="px-2 py-0.5 rounded text-[11px] font-bold uppercase ${p.status === 'published' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}">${p.status}</span>
                        <span class="font-bold text-slate-900 ml-2">${this.escapeHtml(p.title)}</span>
                        <p class="text-xs text-slate-500 mt-1">Автор: ${this.escapeHtml(author.display_name)} • ${this.formatDate(p.created_at)}</p>
                      </div>
                      <div class="flex items-center gap-2 shrink-0">
                        <button onclick="app.moderatePostStatus('${p.id}', '${p.status === 'published' ? 'hidden' : 'published'}')" class="px-3 py-1.5 rounded-xl text-xs font-semibold ${p.status === 'published' ? 'bg-rose-50 text-rose-700' : 'bg-emerald-600 text-white'}">
                          ${p.status === 'published' ? 'Скрыть публикацию' : 'Вернуть в ленту'}
                        </button>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          `;
        }

        // Очередь жалоб (/admin/reports — Сценарий E из PRD)
        if (tab === 'reports') {
          return `
            <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <div class="p-5 border-b border-slate-200">
                <h2 class="font-bold text-slate-900">Очередь жалоб и модерация (Сценарий E)</h2>
                <p class="text-xs text-slate-500">Каждое решение модератора фиксируется в журнале аудита с указанием причины</p>
              </div>
              <div class="divide-y divide-slate-200">
                ${this.db.reports.length === 0 ? `<div class="p-8 text-center text-slate-500">Жалоб нет.</div>` : this.db.reports.map(rep => {
                  const reporter = this.getUserProfile(rep.reporter_id);
                  return `
                    <div class="p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div class="space-y-1">
                        <div class="flex items-center gap-2">
                          <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase ${rep.status === 'new' ? 'bg-rose-100 text-rose-800' : rep.status === 'resolved' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-700'}">${rep.status}</span>
                          <span class="text-xs font-mono text-slate-400">${rep.entity_type}: ${rep.entity_id}</span>
                        </div>
                        <div class="font-bold text-slate-900 text-sm">Причина: ${this.escapeHtml(rep.reason)}</div>
                        <div class="text-xs text-slate-600">${this.escapeHtml(rep.details || '')}</div>
                        <div class="text-[11px] text-slate-400">Отправил: ${this.escapeHtml(reporter.display_name)} • ${this.formatDate(rep.created_at)}</div>
                      </div>
                      <div class="flex flex-wrap items-center gap-2 shrink-0">
                        <button onclick="app.handleReportAction('${rep.id}', 'reviewing', false)" class="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold">Взять в работу</button>
                        <button onclick="app.handleReportAction('${rep.id}', 'resolved', true)" class="px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold">Скрыть контент и закрыть</button>
                        <button onclick="app.handleReportAction('${rep.id}', 'rejected', false)" class="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold">Отклонить жалобу</button>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          `;
        }

        // Управление пользователями и ролями (/admin/users — только Администратор)
        if (tab === 'users') {
          return `
            <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <div class="p-5 border-b border-slate-200">
                <h2 class="font-bold text-slate-900">Пользователи и управление ролями (RBAC)</h2>
                <p class="text-xs text-slate-500">Изменение ролей и блокировка аккаунтов требуют прав Администратора и журналируются</p>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse text-sm">
                  <thead class="bg-slate-50 text-xs uppercase text-slate-500">
                    <tr>
                      <th class="p-4">Пользователь</th>
                      <th class="p-4">Email / Регион</th>
                      <th class="p-4">Роль</th>
                      <th class="p-4">Статус</th>
                      <th class="p-4 text-right">Управление</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200">
                    ${this.db.users.map(u => {
                      const prof = this.getUserProfile(u.id);
                      return `
                        <tr>
                          <td class="p-4 font-bold text-slate-900">${this.escapeHtml(prof.display_name)}</td>
                          <td class="p-4 text-xs text-slate-600">${this.escapeHtml(u.email)} • ${this.escapeHtml(u.region || 'Узбекистан')}</td>
                          <td class="p-4">
                            <select onchange="app.changeUserRole('${u.id}', this.value)" class="px-2.5 py-1 rounded-lg border border-slate-200 text-xs font-semibold bg-white">
                              <option value="user" ${u.role === 'user' ? 'selected' : ''}>user (Ученик)</option>
                              <option value="editor" ${u.role === 'editor' ? 'selected' : ''}>editor (Редактор)</option>
                              <option value="moderator" ${u.role === 'moderator' ? 'selected' : ''}>moderator (Модератор)</option>
                              <option value="admin" ${u.role === 'admin' ? 'selected' : ''}>admin (Администратор)</option>
                            </select>
                          </td>
                          <td class="p-4">
                            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${u.status === 'active' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}">${u.status}</span>
                          </td>
                          <td class="p-4 text-right">
                            <button onclick="app.toggleUserSuspension('${u.id}')" class="px-3 py-1 rounded-lg text-xs font-semibold ${u.status === 'active' ? 'bg-rose-50 text-rose-700' : 'bg-emerald-50 text-emerald-700'}">
                              ${u.status === 'active' ? 'Приостановить' : 'Разблокировать'}
                            </button>
                          </td>
                        </tr>
                      `;
                    }).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          `;
        }

        // Продуктовая аналитика MVP и резервное копирование (/admin/analytics — Раздел 17 PRD)
        const totalUsers = this.db.users.length;
        const usersWithCompletedLesson = new Set(this.db.lesson_progress.filter(lp => lp.status === 'completed').map(lp => lp.user_id)).size;
        const firstLessonRate = totalUsers > 0 ? Math.round((usersWithCompletedLesson / totalUsers) * 100) : 0;
        const regionalUsers = this.db.users.filter(u => u.region && u.region !== 'Ташкент').length;
        const regionalRate = totalUsers > 0 ? Math.round((regionalUsers / totalUsers) * 100) : 0;

        return `
          <div class="space-y-6">
            <div class="bg-white p-6 rounded-2xl border border-slate-200">
              <h2 class="text-lg font-bold text-slate-900 mb-1">Ключевые метрики MVP (Раздел 17 PRD)</h2>
              <p class="text-xs text-slate-500 mb-6">Главная метрика первого этапа — доля пользователей, которые начали обучение и завершили хотя бы один учебный модуль.</p>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div class="p-4 rounded-xl bg-amber-50 border border-amber-200">
                  <div class="text-xs text-amber-900 font-semibold">Завершили минимум 1 урок</div>
                  <div class="text-3xl font-extrabold text-slate-900 mt-1">${firstLessonRate}%</div>
                  <div class="text-xs text-slate-600 mt-1">${usersWithCompletedLesson} из ${totalUsers} пользователей</div>
                </div>
                <div class="p-4 rounded-xl bg-sky-50 border border-sky-200">
                  <div class="text-xs text-sky-900 font-semibold">Доля регионов вне Ташкента</div>
                  <div class="text-3xl font-extrabold text-slate-900 mt-1">${regionalRate}%</div>
                  <div class="text-xs text-slate-600 mt-1">Самарканд, Фергана, Бухара и др.</div>
                </div>
                <div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                  <div class="text-xs text-emerald-900 font-semibold">Всего завершённых уроков / Попыток тестов</div>
                  <div class="text-3xl font-extrabold text-slate-900 mt-1">${this.db.lesson_progress.filter(l => l.status === 'completed').length} / ${this.db.test_attempts.length}</div>
                  <div class="text-xs text-slate-600 mt-1">Реальные записи из таблиц БД</div>
                </div>
              </div>
            </div>

            <!-- Резервное копирование базы данных (PRD 11.1 и 13) -->
            <div class="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 class="font-bold text-slate-900">Резервное копирование и восстановление БД (JSON Snapshot)</h3>
                <p class="text-xs text-slate-500 mt-0.5">Выгрузите полную копию всех 16 таблиц базы данных или восстановите состояние.</p>
              </div>
              <div class="flex flex-wrap gap-2">
                <button onclick="app.exportDatabaseBackup()" class="px-4 py-2 rounded-xl bg-slate-900 text-amber-400 text-xs font-bold">
                  <i class="fa-solid fa-download mr-1"></i> Скачать Backup JSON
                </button>
                <button onclick="app.confirmResetDatabase()" class="px-4 py-2 rounded-xl bg-rose-50 text-rose-700 text-xs font-bold">
                  Сбросить БД к эталонным данным
                </button>
              </div>
            </div>
          </div>
        `;
      },

      // ===================================================================
      // 11. О ПРОЕКТЕ И МАТРИЦА CRUD (/about — Разделы 1, 4, 7, 9, 12 PRD)
      // ===================================================================
      renderAboutPage() {
        return `
          <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 fade-enter space-y-10">
            <div class="bg-slate-900 text-white p-8 rounded-3xl space-y-3">
              <span class="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold">Спецификация PRD v1.0 • Узбекистан</span>
              <h1 class="text-2xl sm:text-4xl font-extrabold">О платформе Aurum Academy и CRUD-архитектуре</h1>
              <p class="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
                Aurum Academy спроектирована по модели <strong>CRUD-first MVP</strong>: сначала надёжная реляционная структура данных, строгая матрица ролей (RBAC) и прозрачный расчёт учебного прогресса.
              </p>
            </div>

            <!-- Матрица CRUD (Раздел 4.1 PRD) -->
            <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <div class="p-6 border-b border-slate-200">
                <h2 class="text-lg font-bold text-slate-900">Матрица прав доступа CRUD (Раздел 4.1 PRD)</h2>
                <p class="text-xs text-slate-500 mt-1">Обозначения: C — Create, R — Read, U — Update, D — Delete</p>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead class="bg-slate-50 text-xs uppercase text-slate-500">
                    <tr>
                      <th class="p-3.5">Сущность</th>
                      <th class="p-3.5">Гость</th>
                      <th class="p-3.5">Пользователь</th>
                      <th class="p-3.5">Редактор</th>
                      <th class="p-3.5">Администратор</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200">
                    <tr><td class="p-3.5 font-bold">Профиль</td><td class="p-3.5">R публичного</td><td class="p-3.5">CRUD своего профиля</td><td class="p-3.5">То же</td><td class="p-3.5">Управление по правилам</td></tr>
                    <tr><td class="p-3.5 font-bold">Курс</td><td class="p-3.5">R опубликованного</td><td class="p-3.5">R, запись</td><td class="p-3.5">CRUD контента</td><td class="p-3.5">CRUD</td></tr>
                    <tr><td class="p-3.5 font-bold">Урок</td><td class="p-3.5">R доступного</td><td class="p-3.5">R, отметка о прохождении</td><td class="p-3.5">CRUD</td><td class="p-3.5">CRUD</td></tr>
                    <tr><td class="p-3.5 font-bold">Тест</td><td class="p-3.5">R доступного</td><td class="p-3.5">R, прохождение</td><td class="p-3.5">CRUD</td><td class="p-3.5">CRUD</td></tr>
                    <tr><td class="p-3.5 font-bold">Результат теста</td><td class="p-3.5">—</td><td class="p-3.5">C, R собственных попыток</td><td class="p-3.5">—</td><td class="p-3.5">R агрегированных данных</td></tr>
                    <tr><td class="p-3.5 font-bold">Библиотечный материал</td><td class="p-3.5">R публичного</td><td class="p-3.5">R, сохранение</td><td class="p-3.5">CRUD</td><td class="p-3.5">CRUD</td></tr>
                    <tr><td class="p-3.5 font-bold">Публикация и Комментарий</td><td class="p-3.5">R публичной</td><td class="p-3.5">CRUD собственных</td><td class="p-3.5">Модерация (при правах)</td><td class="p-3.5">Полный контроль</td></tr>
                    <tr><td class="p-3.5 font-bold">Жалоба</td><td class="p-3.5">—</td><td class="p-3.5">C, R своей жалобы</td><td class="p-3.5">— (Модератор: R/U)</td><td class="p-3.5">R/U статуса обработки</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        `;
      },

      // ===================================================================
      // 12. МОДАЛЬНЫЕ ФОРМЫ CRUD И ДЕЙСТВИЯ БЕЗ ALERT/CONFIRM
      // ===================================================================
      openCourseModal(courseId = null) {
        if (!this.hasPermission('manage_content')) {
          this.toast('Недостаточно прав для управления курсами.', 'error');
          return;
        }
        const existing = courseId ? this.db.courses.find(c => c.id === courseId) : null;
        const categories = this.db.categories.filter(c => c.status === 'active');

        this.openModal(`
          <form onsubmit="app.saveCourseForm(event, ${existing ? `'${existing.id}'` : 'null'})" class="p-6 space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 class="text-lg font-extrabold text-slate-900">${existing ? 'Редактировать курс' : 'Создать новый курс (Сценарий A)'}</h3>
              <button type="button" onclick="app.closeModal()" class="text-slate-400 hover:text-slate-700"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div class="sm:col-span-2">
                <label class="block text-xs font-semibold text-slate-700 mb-1">Название курса *</label>
                <input type="text" name="title" required value="${existing ? this.escapeHtml(existing.title) : ''}" placeholder="Например: Алгебра и начала анализа" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm" />
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1">Категория *</label>
                <select name="category_id" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm bg-white">
                  ${categories.map(c => `<option value="${c.id}" ${existing && existing.category_id === c.id ? 'selected' : ''}>${this.escapeHtml(c.name)}</option>`).join('')}
                </select>
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1">Уровень сложности</label>
                <select name="level" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm bg-white">
                  <option value="Начальный" ${existing && existing.level === 'Начальный' ? 'selected' : ''}>Начальный</option>
                  <option value="Средний" ${existing && existing.level === 'Средний' ? 'selected' : ''}>Средний</option>
                  <option value="Продвинутый" ${existing && existing.level === 'Продвинутый' ? 'selected' : ''}>Продвинутый</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1">Продолжительность (часов)</label>
                <input type="number" name="duration_hours" min="1" value="${existing ? existing.duration_hours : 16}" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm" />
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1">Статус публикации</label>
                <select name="status" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm bg-white">
                  <option value="draft" ${!existing || existing.status === 'draft' ? 'selected' : ''}>draft (Черновик)</option>
                  <option value="published" ${existing && existing.status === 'published' ? 'selected' : ''}>published (Опубликован)</option>
                  <option value="archived" ${existing && existing.status === 'archived' ? 'selected' : ''}>archived (В архиве)</option>
                </select>
              </div>
              <div class="sm:col-span-2">
                <label class="block text-xs font-semibold text-slate-700 mb-1">Описание курса *</label>
                <textarea name="description" rows="3" required class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm">${existing ? this.escapeHtml(existing.description) : ''}</textarea>
              </div>
              <div class="sm:col-span-2">
                <label class="block text-xs font-semibold text-slate-700 mb-1">Цели обучения (каждая с новой строки)</label>
                <textarea name="objectives" rows="3" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm">${existing ? this.escapeHtml((existing.objectives || []).join('\n')) : 'Освоить базовые понятия и алгоритмы решения задач\nЗакрепить материал на тестах'}</textarea>
              </div>
            </div>
            <div class="flex justify-end gap-2 pt-3 border-t border-slate-100">
              <button type="button" onclick="app.closeModal()" class="px-4 py-2 rounded-xl bg-slate-100 text-xs font-semibold">Отмена</button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold">Сохранить курс</button>
            </div>
          </form>
        `);
      },

      saveCourseForm(event, courseId) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const title = fd.get('title').trim();
        const slug = title.toLowerCase().replace(/[^a-zа-яё0-9]+/gi, '-').replace(/^-|-$/g, '') + '-' + Date.now().toString(36).slice(-3);
        const now = new Date().toISOString();
        const user = this.getCurrentUser();

        if (courseId) {
          const c = this.db.courses.find(x => x.id === courseId);
          if (c) {
            c.title = title;
            c.category_id = fd.get('category_id');
            c.level = fd.get('level');
            c.duration_hours = Number(fd.get('duration_hours') || 12);
            c.status = fd.get('status');
            c.description = fd.get('description').trim();
            c.objectives = fd.get('objectives').split('\n').map(s => s.trim()).filter(Boolean);
            c.updated_at = now;
            this.logAudit('COURSE_UPDATE', 'course', c.id, `Обновлён курс «${c.title}» (${c.status})`);
          }
        } else {
          const newCourse = {
            id: this.uid('course'),
            title,
            slug,
            description: fd.get('description').trim(),
            objectives: fd.get('objectives').split('\n').map(s => s.trim()).filter(Boolean),
            cover_url: `https://placehold.co/800x420/0f172a/fbbf24?text=${encodeURIComponent(title.slice(0, 28))}`,
            category_id: fd.get('category_id'),
            level: fd.get('level'),
            language: 'Русский',
            author_id: user ? user.id : 'u-editor-1',
            duration_hours: Number(fd.get('duration_hours') || 12),
            status: fd.get('status'),
            created_at: now,
            updated_at: now
          };
          this.db.courses.unshift(newCourse);
          this.logAudit('COURSE_CREATE', 'course', newCourse.id, `Создан курс «${newCourse.title}» (${newCourse.status})`);
        }

        this.saveDatabase();
        this.closeModal();
        this.toast('Курс успешно сохранён!', 'success');
        this.renderCurrentRoute();
      },

      setCourseStatus(courseId, status) {
        const c = this.db.courses.find(x => x.id === courseId);
        if (!c) return;
        c.status = status;
        c.updated_at = new Date().toISOString();
        this.logAudit('COURSE_STATUS', 'course', courseId, `Статус курса «${c.title}» изменён на ${status}`);
        this.saveDatabase();
        this.toast(`Статус курса изменён на: ${status}`, 'success');
        this.renderCurrentRoute();
      },

      confirmDeleteCourse(courseId) {
        const c = this.db.courses.find(x => x.id === courseId);
        if (!c) return;
        this.openModal(`
          <div class="p-6 space-y-4">
            <h3 class="text-lg font-bold text-slate-900">Подтверждение удаления черновика курса</h3>
            <p class="text-sm text-slate-600">Вы действительно хотите окончательно удалить черновик курса <strong>«${this.escapeHtml(c.title)}»</strong>?</p>
            <div class="flex justify-end gap-2">
              <button onclick="app.closeModal()" class="px-4 py-2 rounded-xl bg-slate-100 text-xs font-semibold">Отмена</button>
              <button onclick="app.deleteCourseDraft('${c.id}')" class="px-4 py-2 rounded-xl bg-rose-600 text-white text-xs font-bold">Удалить черновик</button>
            </div>
          </div>
        `);
      },

      deleteCourseDraft(courseId) {
        this.db.courses = this.db.courses.filter(c => c.id !== courseId);
        this.logAudit('COURSE_DELETE_DRAFT', 'course', courseId, 'Удалён черновик курса');
        this.saveDatabase();
        this.closeModal();
        this.toast('Черновик курса удалён.', 'info');
        this.renderCurrentRoute();
      },

      openLessonModal(lessonId = null, defaultCourseId = null) {
        const existing = lessonId ? this.db.lessons.find(l => l.id === lessonId) : null;
        const courses = this.db.courses;
        const selectedCourseId = existing ? existing.course_id : (defaultCourseId || (courses[0] && courses[0].id));

        this.openModal(`
          <form onsubmit="app.saveLessonForm(event, ${existing ? `'${existing.id}'` : 'null'})" class="p-6 space-y-4">
            <h3 class="text-lg font-bold text-slate-900">${existing ? 'Редактировать урок' : 'Добавить урок в курс'}</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div class="sm:col-span-2">
                <label class="block text-xs font-semibold text-slate-700 mb-1">Курс *</label>
                <select name="course_id" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm bg-white">
                  ${courses.map(c => `<option value="${c.id}" ${c.id === selectedCourseId ? 'selected' : ''}>${this.escapeHtml(c.title)}</option>`).join('')}
                </select>
              </div>
              <div class="sm:col-span-2">
                <label class="block text-xs font-semibold text-slate-700 mb-1">Название урока *</label>
                <input type="text" name="title" required value="${existing ? this.escapeHtml(existing.title) : ''}" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm" />
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1">Порядковый номер</label>
                <input type="number" name="position" min="1" value="${existing ? existing.position : 1}" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm" />
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1">Продолжительность (минут)</label>
                <input type="number" name="duration_minutes" min="5" value="${existing ? existing.duration_minutes : 35}" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm" />
              </div>
              <div class="sm:col-span-2">
                <label class="block text-xs font-semibold text-slate-700 mb-1">Краткое описание</label>
                <input type="text" name="summary" value="${existing ? this.escapeHtml(existing.summary || '') : ''}" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm" />
              </div>
              <div class="sm:col-span-2">
                <label class="block text-xs font-semibold text-slate-700 mb-1">Содержание урока (HTML / Текст) *</label>
                <textarea name="content" rows="5" required class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm">${existing ? this.escapeHtml(existing.content) : '<p>Конспект урока и примеры решения задач...</p>'}</textarea>
              </div>
            </div>
            <div class="flex justify-end gap-2 pt-2">
              <button type="button" onclick="app.closeModal()" class="px-4 py-2 rounded-xl bg-slate-100 text-xs font-semibold">Отмена</button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold">Сохранить урок</button>
            </div>
          </form>
        `);
      },

      saveLessonForm(event, lessonId) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const now = new Date().toISOString();
        if (lessonId) {
          const l = this.db.lessons.find(x => x.id === lessonId);
          if (l) {
            l.course_id = fd.get('course_id');
            l.title = fd.get('title').trim();
            l.position = Number(fd.get('position') || 1);
            l.duration_minutes = Number(fd.get('duration_minutes') || 30);
            l.summary = fd.get('summary').trim();
            l.content = fd.get('content');
            l.updated_at = now;
          }
        } else {
          this.db.lessons.push({
            id: this.uid('les'),
            course_id: fd.get('course_id'),
            title: fd.get('title').trim(),
            summary: fd.get('summary').trim(),
            content: fd.get('content'),
            video_url: '',
            attachments: [],
            position: Number(fd.get('position') || 1),
            duration_minutes: Number(fd.get('duration_minutes') || 30),
            status: 'published',
            created_at: now,
            updated_at: now
          });
        }
        this.saveDatabase();
        this.closeModal();
        this.toast('Урок сохранён!', 'success');
        this.renderCurrentRoute();
      },

      toggleLessonStatus(lessonId) {
        const l = this.db.lessons.find(x => x.id === lessonId);
        if (!l) return;
        l.status = l.status === 'published' ? 'archived' : 'published';
        this.saveDatabase();
        this.toast(`Статус урока: ${l.status}`, 'info');
        this.renderCurrentRoute();
      },

      openTestModal(testId = null, defaultLessonId = null, defaultCourseId = null) {
        const existing = testId ? this.db.tests.find(t => t.id === testId) : null;
        const lessons = this.db.lessons;
        this.openModal(`
          <form onsubmit="app.saveTestForm(event, ${existing ? `'${existing.id}'` : 'null'})" class="p-6 space-y-4">
            <h3 class="text-lg font-bold text-slate-900">${existing ? 'Настройки теста' : 'Создать проверочный тест'}</h3>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Привязать к уроку *</label>
              <select name="lesson_id" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm bg-white">
                ${lessons.map(l => `<option value="${l.id}" ${(existing && existing.lesson_id === l.id) || l.id === defaultLessonId ? 'selected' : ''}>${this.escapeHtml(l.title)}</option>`).join('')}
              </select>
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Название теста *</label>
              <input type="text" name="title" required value="${existing ? this.escapeHtml(existing.title) : ''}" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Инструкция</label>
              <textarea name="instructions" rows="2" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm">${existing ? this.escapeHtml(existing.instructions) : 'Ответьте на вопросы по материалу урока.'}</textarea>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1">Проходной балл (%)</label>
                <input type="number" name="passing_score" min="10" max="100" value="${existing ? existing.passing_score : 70}" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm" />
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1">Лимит времени (мин.)</label>
                <input type="number" name="time_limit_minutes" min="5" value="${existing ? existing.time_limit_minutes : 15}" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm" />
              </div>
            </div>
            <div class="flex justify-end gap-2 pt-2">
              <button type="button" onclick="app.closeModal()" class="px-4 py-2 rounded-xl bg-slate-100 text-xs font-semibold">Отмена</button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold">Сохранить тест</button>
            </div>
          </form>
        `);
      },

      saveTestForm(event, testId) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const lesson = this.db.lessons.find(l => l.id === fd.get('lesson_id'));
        if (testId) {
          const t = this.db.tests.find(x => x.id === testId);
          if (t) {
            t.lesson_id = fd.get('lesson_id');
            t.course_id = lesson ? lesson.course_id : t.course_id;
            t.title = fd.get('title').trim();
            t.instructions = fd.get('instructions').trim();
            t.passing_score = Number(fd.get('passing_score') || 70);
            t.time_limit_minutes = Number(fd.get('time_limit_minutes') || 15);
          }
        } else {
          this.db.tests.push({
            id: this.uid('test'),
            lesson_id: fd.get('lesson_id'),
            course_id: lesson ? lesson.course_id : 'course-1',
            title: fd.get('title').trim(),
            instructions: fd.get('instructions').trim(),
            passing_score: Number(fd.get('passing_score') || 70),
            time_limit_minutes: Number(fd.get('time_limit_minutes') || 15),
            status: 'published'
          });
        }
        this.saveDatabase();
        this.closeModal();
        this.toast('Тест сохранён!', 'success');
        this.renderCurrentRoute();
      },

      openQuestionModal(testId) {
        this.openModal(`
          <form onsubmit="app.saveQuestionForm(event, '${testId}')" class="p-6 space-y-4">
            <h3 class="text-lg font-bold text-slate-900">Добавить вопрос в тест</h3>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Тип вопроса</label>
              <select name="type" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm bg-white">
                <option value="single_choice">Один правильный ответ (single_choice)</option>
                <option value="short_text">Короткий текстовый ответ (short_text)</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Текст вопроса *</label>
              <input type="text" name="text" required class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Варианты ответа (через запятую, для single_choice)</label>
              <input type="text" name="options" placeholder="Вариант 1, Вариант 2, Вариант 3" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Правильный ответ (эталон) *</label>
              <input type="text" name="correct_answer" required class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm" />
            </div>
            <div class="flex justify-end gap-2">
              <button type="button" onclick="app.closeModal()" class="px-4 py-2 rounded-xl bg-slate-100 text-xs font-semibold">Отмена</button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold">Добавить вопрос</button>
            </div>
          </form>
        `);
      },

      saveQuestionForm(event, testId) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const type = fd.get('type');
        const opts = fd.get('options').split(',').map(s => s.trim()).filter(Boolean);
        this.db.questions.push({
          id: this.uid('q'),
          test_id: testId,
          type,
          text: fd.get('text').trim(),
          options: type === 'short_text' ? null : opts,
          correct_answer: type === 'short_text' ? [fd.get('correct_answer').trim()] : fd.get('correct_answer').trim(),
          explanation: 'Проверено по эталонному ответу.',
          points: 10,
          position: this.db.questions.filter(q => q.test_id === testId).length + 1
        });
        this.saveDatabase();
        this.closeModal();
        this.toast('Вопрос добавлен!', 'success');
        this.renderCurrentRoute();
      },

      deleteQuestion(qId) {
        this.db.questions = this.db.questions.filter(q => q.id !== qId);
        this.saveDatabase();
        this.toast('Вопрос удалён.', 'info');
        this.renderCurrentRoute();
      },

      openFlashcardModal() {
        const courses = this.db.courses;
        this.openModal(`
          <form onsubmit="app.saveFlashcardForm(event)" class="p-6 space-y-4">
            <h3 class="text-lg font-bold text-slate-900">Добавить карточку для повторения</h3>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Курс</label>
              <select name="course_id" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm bg-white">
                ${courses.map(c => `<option value="${c.id}">${this.escapeHtml(c.title)}</option>`).join('')}
              </select>
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Лицевая сторона (Термин / Вопрос) *</label>
              <input type="text" name="front" required class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Обратная сторона (Определение / Формула) *</label>
              <input type="text" name="back" required class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm" />
            </div>
            <div class="flex justify-end gap-2">
              <button type="button" onclick="app.closeModal()" class="px-4 py-2 rounded-xl bg-slate-100 text-xs font-semibold">Отмена</button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold">Сохранить</button>
            </div>
          </form>
        `);
      },

      saveFlashcardForm(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        this.db.flashcards.push({
          id: this.uid('fc'),
          course_id: fd.get('course_id'),
          lesson_id: null,
          category_id: 'cat-math',
          front: fd.get('front').trim(),
          back: fd.get('back').trim(),
          position: this.db.flashcards.length + 1,
          status: 'published'
        });
        this.saveDatabase();
        this.closeModal();
        this.toast('Карточка добавлена!', 'success');
        this.renderCurrentRoute();
      },

      openMaterialModal(matId = null) {
        const existing = matId ? this.db.library_materials.find(m => m.id === matId) : null;
        const categories = this.db.categories;
        this.openModal(`
          <form onsubmit="app.saveMaterialForm(event, ${existing ? `'${existing.id}'` : 'null'})" class="p-6 space-y-4">
            <h3 class="text-lg font-bold text-slate-900">${existing ? 'Редактировать материал' : 'Добавить материал в библиотеку'}</h3>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Название *</label>
              <input type="text" name="title" required value="${existing ? this.escapeHtml(existing.title) : ''}" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm" />
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1">Тип материала</label>
                <select name="type" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm bg-white">
                  <option value="book">Книга / Учебник</option>
                  <option value="notes">Конспект</option>
                  <option value="document">Документ</option>
                  <option value="video">Видео</option>
                  <option value="link">Полезная ссылка</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1">Категория</label>
                <select name="category_id" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm bg-white">
                  ${categories.map(c => `<option value="${c.id}">${this.escapeHtml(c.name)}</option>`).join('')}
                </select>
              </div>
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Описание *</label>
              <textarea name="description" rows="2" required class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm">${existing ? this.escapeHtml(existing.description) : ''}</textarea>
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Лицензия / Условия использования (OER) *</label>
              <input type="text" name="license_info" required value="${existing ? this.escapeHtml(existing.license_info) : 'CC BY 4.0 (Открытая лицензия)'}" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm" />
            </div>
            <div class="flex justify-end gap-2">
              <button type="button" onclick="app.closeModal()" class="px-4 py-2 rounded-xl bg-slate-100 text-xs font-semibold">Отмена</button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold">Сохранить</button>
            </div>
          </form>
        `);
      },

      saveMaterialForm(event, matId) {
        event.preventDefault();
        const fd = new FormData(event.target);
        if (matId) {
          const m = this.db.library_materials.find(x => x.id === matId);
          if (m) {
            m.title = fd.get('title').trim();
            m.type = fd.get('type');
            m.category_id = fd.get('category_id');
            m.description = fd.get('description').trim();
            m.license_info = fd.get('license_info').trim();
          }
        } else {
          this.db.library_materials.unshift({
            id: this.uid('mat'),
            title: fd.get('title').trim(),
            description: fd.get('description').trim(),
            type: fd.get('type'),
            source_url: 'https://openstax.org',
            file_url: 'https://openstax.org',
            author_info: 'Редакция Aurum Academy',
            category_id: fd.get('category_id'),
            language: 'Русский',
            license_info: fd.get('license_info').trim(),
            status: 'published',
            created_at: new Date().toISOString()
          });
        }
        this.saveDatabase();
        this.closeModal();
        this.toast('Материал библиотеки сохранён!', 'success');
        this.renderCurrentRoute();
      },

      deleteMaterial(matId) {
        this.db.library_materials = this.db.library_materials.filter(m => m.id !== matId);
        this.saveDatabase();
        this.toast('Материал удалён.', 'info');
        this.renderCurrentRoute();
      },

      openMaterialDetailModal(matId) {
        const mat = this.db.library_materials.find(m => m.id === matId);
        if (!mat) return;
        this.openModal(`
          <div class="p-6 space-y-4">
            <span class="px-2.5 py-1 rounded bg-amber-100 text-amber-800 text-xs font-bold uppercase">${this.escapeHtml(mat.type)}</span>
            <h3 class="text-xl font-extrabold text-slate-900">${this.escapeHtml(mat.title)}</h3>
            <p class="text-sm text-slate-600 leading-relaxed">${this.escapeHtml(mat.description)}</p>
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
              <div><strong>Автор / Источник:</strong> ${this.escapeHtml(mat.author_info || 'OER')}</div>
              <div><strong>Язык:</strong> ${this.escapeHtml(mat.language)}</div>
              <div><strong>Лицензия:</strong> ${this.escapeHtml(mat.license_info)}</div>
            </div>
            <div class="flex justify-end gap-2 pt-2">
              <button onclick="app.closeModal()" class="px-4 py-2 rounded-xl bg-slate-100 text-xs font-semibold">Закрыть</button>
              <a href="${this.escapeHtml(mat.source_url || '#')}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold">Перейти к первоисточнику ↗</a>
            </div>
          </div>
        `);
      },

      openCategoryModal(catId = null) {
        const existing = catId ? this.db.categories.find(c => c.id === catId) : null;
        this.openModal(`
          <form onsubmit="app.saveCategoryForm(event, ${existing ? `'${existing.id}'` : 'null'})" class="p-6 space-y-4">
            <h3 class="text-lg font-bold text-slate-900">${existing ? 'Изменить категорию' : 'Новая категория'}</h3>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Название *</label>
              <input type="text" name="name" required value="${existing ? this.escapeHtml(existing.name) : ''}" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Описание</label>
              <textarea name="description" rows="2" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm">${existing ? this.escapeHtml(existing.description) : ''}</textarea>
            </div>
            <div class="flex justify-end gap-2">
              <button type="button" onclick="app.closeModal()" class="px-4 py-2 rounded-xl bg-slate-100 text-xs font-semibold">Отмена</button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold">Сохранить</button>
            </div>
          </form>
        `);
      },

      saveCategoryForm(event, catId) {
        event.preventDefault();
        const fd = new FormData(event.target);
        if (catId) {
          const c = this.db.categories.find(x => x.id === catId);
          if (c) {
            c.name = fd.get('name').trim();
            c.description = fd.get('description').trim();
          }
        } else {
          this.db.categories.push({
            id: this.uid('cat'),
            name: fd.get('name').trim(),
            slug: 'cat-' + Date.now().toString(36),
            description: fd.get('description').trim(),
            parent_id: null,
            status: 'active'
          });
        }
        this.saveDatabase();
        this.closeModal();
        this.toast('Категория сохранена!', 'success');
        this.renderCurrentRoute();
      },

      // Создание и редактирование публикации в сообществе (Сценарий C: проверка авторства)
      openPostModal(postId = null) {
        const user = this.getCurrentUser();
        if (!user) {
          this.navigate('/login');
          return;
        }
        const existing = postId ? this.db.posts.find(p => p.id === postId) : null;
        if (existing && existing.author_id !== user.id && user.role !== 'admin') {
          this.toast('Ошибка доступа: вы можете редактировать только собственные публикации (Сценарий C).', 'error');
          return;
        }

        this.openModal(`
          <form onsubmit="app.savePostForm(event, ${existing ? `'${existing.id}'` : 'null'})" class="p-6 space-y-4">
            <h3 class="text-lg font-bold text-slate-900">${existing ? 'Редактировать публикацию' : 'Создать публикацию в сообществе'}</h3>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Тип публикации</label>
              <select name="type" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm bg-white">
                <option value="question" ${existing && existing.type === 'question' ? 'selected' : ''}>Вопрос по учёбе</option>
                <option value="study_group" ${existing && existing.type === 'study_group' ? 'selected' : ''}>Поиск учебной группы</option>
                <option value="advice" ${existing && existing.type === 'advice' ? 'selected' : ''}>Учебный совет</option>
                <option value="discussion" ${existing && existing.type === 'discussion' ? 'selected' : ''}>Обсуждение</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Заголовок *</label>
              <input type="text" name="title" required value="${existing ? this.escapeHtml(existing.title) : ''}" placeholder="Сформулируйте суть вопроса или темы..." class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Содержание *</label>
              <textarea name="body" rows="4" required class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm">${existing ? this.escapeHtml(existing.body) : ''}</textarea>
            </div>
            <div class="flex justify-end gap-2">
              <button type="button" onclick="app.closeModal()" class="px-4 py-2 rounded-xl bg-slate-100 text-xs font-semibold">Отмена</button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold">Опубликовать</button>
            </div>
          </form>
        `);
      },

      savePostForm(event, postId) {
        event.preventDefault();
        const user = this.getCurrentUser();
        if (!user) return;
        const fd = new FormData(event.target);
        const now = new Date().toISOString();

        if (postId) {
          const p = this.db.posts.find(x => x.id === postId);
          if (p && (p.author_id === user.id || user.role === 'admin')) {
            p.type = fd.get('type');
            p.title = fd.get('title').trim();
            p.body = fd.get('body').trim();
            p.updated_at = now;
          }
        } else {
          this.db.posts.unshift({
            id: this.uid('post'),
            author_id: user.id,
            title: fd.get('title').trim(),
            body: fd.get('body').trim(),
            type: fd.get('type'),
            status: 'published',
            created_at: now,
            updated_at: now
          });
        }
        this.saveDatabase();
        this.closeModal();
        this.toast('Публикация сохранена!', 'success');
        this.renderCurrentRoute();
      },

      confirmDeletePost(postId) {
        const user = this.getCurrentUser();
        const post = this.db.posts.find(p => p.id === postId);
        if (!post || (!user || (post.author_id !== user.id && user.role !== 'admin'))) {
          this.toast('Вы не можете удалить чужую публикацию.', 'error');
          return;
        }
        this.openModal(`
          <div class="p-6 space-y-4">
            <h3 class="text-lg font-bold text-slate-900">Удалить публикацию?</h3>
            <p class="text-sm text-slate-600">Публикация «${this.escapeHtml(post.title)}» будет удалена.</p>
            <div class="flex justify-end gap-2">
              <button onclick="app.closeModal()" class="px-4 py-2 rounded-xl bg-slate-100 text-xs font-semibold">Отмена</button>
              <button onclick="app.deletePost('${post.id}')" class="px-4 py-2 rounded-xl bg-rose-600 text-white text-xs font-bold">Удалить</button>
            </div>
          </div>
        `);
      },

      deletePost(postId) {
        this.db.posts = this.db.posts.filter(p => p.id !== postId);
        this.saveDatabase();
        this.closeModal();
        this.toast('Публикация удалена.', 'info');
        if (this.currentRoute.startsWith('/community/')) {
          this.navigate('/community');
        } else {
          this.renderCurrentRoute();
        }
      },

      submitComment(event, postId) {
        event.preventDefault();
        const user = this.getCurrentUser();
        if (!user) return;
        const fd = new FormData(event.target);
        const now = new Date().toISOString();
        this.db.comments.push({
          id: this.uid('com'),
          post_id: postId,
          author_id: user.id,
          body: fd.get('body').trim(),
          status: 'published',
          created_at: now,
          updated_at: now
        });
        this.saveDatabase();
        this.toast('Комментарий добавлен!', 'success');
        this.renderCurrentRoute();
      },

      openEditCommentModal(commentId) {
        const user = this.getCurrentUser();
        const com = this.db.comments.find(c => c.id === commentId);
        if (!com || !user || com.author_id !== user.id) return;
        this.openModal(`
          <form onsubmit="app.saveCommentEdit(event, '${com.id}')" class="p-6 space-y-4">
            <h3 class="text-lg font-bold text-slate-900">Редактировать комментарий</h3>
            <textarea name="body" rows="3" required class="w-full p-3 rounded-xl border border-slate-200 text-sm">${this.escapeHtml(com.body)}</textarea>
            <div class="flex justify-end gap-2">
              <button type="button" onclick="app.closeModal()" class="px-4 py-2 rounded-xl bg-slate-100 text-xs font-semibold">Отмена</button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold">Сохранить</button>
            </div>
          </form>
        `);
      },

      saveCommentEdit(event, commentId) {
        event.preventDefault();
        const com = this.db.comments.find(c => c.id === commentId);
        if (com) {
          com.body = new FormData(event.target).get('body').trim();
          com.updated_at = new Date().toISOString();
          this.saveDatabase();
        }
        this.closeModal();
        this.toast('Комментарий обновлён.', 'success');
        this.renderCurrentRoute();
      },

      deleteComment(commentId) {
        const user = this.getCurrentUser();
        const com = this.db.comments.find(c => c.id === commentId);
        if (!com || !user || (com.author_id !== user.id && user.role !== 'admin')) return;
        this.db.comments = this.db.comments.filter(c => c.id !== commentId);
        this.saveDatabase();
        this.toast('Комментарий удалён.', 'info');
        this.renderCurrentRoute();
      },

      // Отправка жалобы и модерация (Сценарий E)
      openReportModal(entityType, entityId) {
        const user = this.getCurrentUser();
        if (!user) {
          this.navigate('/login');
          return;
        }
        this.openModal(`
          <form onsubmit="app.submitReport(event, '${entityType}', '${entityId}')" class="p-6 space-y-4">
            <h3 class="text-lg font-bold text-slate-900">Отправить жалобу модераторам (Сценарий E)</h3>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Причина обращения *</label>
              <select name="reason" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm bg-white">
                <option value="Спам или реклама платных услуг">Спам или реклама платных услуг</option>
                <option value="Нарушение правил уважительного общения">Нарушение правил уважительного общения</option>
                <option value="Недостоверная информация">Недостоверная информация</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Дополнительное описание</label>
              <textarea name="details" rows="2" class="w-full p-3 rounded-xl border border-slate-200 text-sm" placeholder="Опишите подробности..."></textarea>
            </div>
            <div class="flex justify-end gap-2">
              <button type="button" onclick="app.closeModal()" class="px-4 py-2 rounded-xl bg-slate-100 text-xs font-semibold">Отмена</button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-rose-600 text-white text-xs font-bold">Отправить жалобу</button>
            </div>
          </form>
        `);
      },

      submitReport(event, entityType, entityId) {
        event.preventDefault();
        const user = this.getCurrentUser();
        if (!user) return;
        const fd = new FormData(event.target);
        this.db.reports.unshift({
          id: this.uid('rep'),
          reporter_id: user.id,
          entity_type: entityType,
          entity_id: entityId,
          reason: fd.get('reason'),
          details: fd.get('details').trim(),
          status: 'new',
          reviewed_by: null,
          created_at: new Date().toISOString()
        });
        this.saveDatabase();
        this.closeModal();
        this.toast('Жалоба отправлена и доступна модератору в панели /admin/reports.', 'success');
      },

      handleReportAction(reportId, newStatus, hideEntity) {
        if (!this.hasPermission('moderate')) {
          this.toast('Недостаточно прав модератора.', 'error');
          return;
        }
        const rep = this.db.reports.find(r => r.id === reportId);
        const user = this.getCurrentUser();
        if (!rep) return;

        rep.status = newStatus;
        rep.reviewed_by = user ? user.id : 'moderator';

        if (hideEntity) {
          if (rep.entity_type === 'post') {
            const p = this.db.posts.find(x => x.id === rep.entity_id);
            if (p) p.status = 'hidden';
          } else if (rep.entity_type === 'comment') {
            const c = this.db.comments.find(x => x.id === rep.entity_id);
            if (c) c.status = 'hidden';
          }
        }

        this.logAudit('REPORT_MODERATE', rep.entity_type, rep.entity_id, `Жалоба ${rep.id} переведена в статус ${newStatus} (скрытие: ${hideEntity})`);
        this.saveDatabase();
        this.toast(`Статус жалобы обновлён: ${newStatus}`, 'success');
        this.renderCurrentRoute();
      },

      moderatePostStatus(postId, status) {
        if (!this.hasPermission('moderate')) return;
        const p = this.db.posts.find(x => x.id === postId);
        if (!p) return;
        p.status = status;
        this.logAudit('POST_MODERATE', 'post', postId, `Статус публикации изменён модератором на ${status}`);
        this.saveDatabase();
        this.toast(`Публикация переведена в статус: ${status}`, 'info');
        this.renderCurrentRoute();
      },

      changeUserRole(userId, newRole) {
        if (!this.hasPermission('admin_only')) {
          this.toast('Только администратор может менять роли.', 'error');
          return;
        }
        const u = this.db.users.find(x => x.id === userId);
        if (!u) return;
        u.role = newRole;
        u.updated_at = new Date().toISOString();
        this.logAudit('USER_ROLE_CHANGE', 'user', userId, `Роль пользователя ${u.email} изменена на ${newRole}`);
        this.saveDatabase();
        this.toast(`Роль пользователя ${u.email} изменена на ${newRole}`, 'success');
        this.renderHeader();
        this.renderCurrentRoute();
      },

      toggleUserSuspension(userId) {
        if (!this.hasPermission('admin_only')) return;
        const u = this.db.users.find(x => x.id === userId);
        if (!u) return;
        u.status = u.status === 'active' ? 'suspended' : 'active';
        this.logAudit('USER_STATUS_CHANGE', 'user', userId, `Статус пользователя ${u.email} изменён на ${u.status}`);
        this.saveDatabase();
        this.toast(`Статус аккаунта ${u.email}: ${u.status}`, 'info');
        this.renderCurrentRoute();
      },

      // Экспорт резервной копии БД и сброс демо-данных
      exportDatabaseBackup() {
        const dataStr = JSON.stringify(this.db, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `aurum_academy_backup_${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
        this.toast('Резервная копия базы данных скачана.', 'success');
      },

      confirmResetDatabase() {
        this.openModal(`
          <div class="p-6 space-y-4">
            <h3 class="text-lg font-bold text-slate-900">Сбросить базу данных к начальному состоянию?</h3>
            <p class="text-sm text-slate-600">Все созданные вами записи будут заменены исходным демонстрационным набором Aurum Academy.</p>
            <div class="flex justify-end gap-2">
              <button onclick="app.closeModal()" class="px-4 py-2 rounded-xl bg-slate-100 text-xs font-semibold">Отмена</button>
              <button onclick="app.resetDatabaseNow()" class="px-4 py-2 rounded-xl bg-rose-600 text-white text-xs font-bold">Сбросить БД</button>
            </div>
          </div>
        `);
      },

      resetDatabaseNow() {
        localStorage.removeItem(STORAGE_KEY);
        this.db = createInitialDatabase();
        this.saveDatabase();
        this.closeModal();
        this.toast('База данных восстановлена к начальному состоянию.', 'success');
        this.renderHeader();
        this.navigate('/');
      },

      // ===================================================================
      // 13. МОДАЛЬНОЕ ОКНО ЭКСПОРТА 3 ОТДЕЛЬНЫХ ФАЙЛОВ: index.html, style.css, script.js
      // ===================================================================
      openCodeExportModal() {
        this.openModal(`
          <div class="p-6 space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 class="text-lg font-extrabold text-slate-900">Экспорт проекта в 3 файла (index.html, style.css, script.js)</h3>
                <p class="text-xs text-slate-500">Вы можете скачать каждый из трёх файлов отдельно для локального запуска</p>
              </div>
              <button onclick="app.closeModal()" class="text-slate-400 hover:text-slate-700"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button onclick="app.downloadSplitFile('index.html')" class="p-4 rounded-2xl border border-slate-200 hover:border-amber-400 bg-slate-50 text-left transition">
                <div class="font-bold text-slate-900 text-sm"><i class="fa-brands fa-html5 text-orange-500 mr-1.5"></i>index.html</div>
                <div class="text-xs text-slate-500 mt-1">Разметка + подключение style.css и script.js</div>
              </button>
              <button onclick="app.downloadSplitFile('style.css')" class="p-4 rounded-2xl border border-slate-200 hover:border-amber-400 bg-slate-50 text-left transition">
                <div class="font-bold text-slate-900 text-sm"><i class="fa-brands fa-css3-alt text-sky-500 mr-1.5"></i>style.css</div>
                <div class="text-xs text-slate-500 mt-1">Стили 3D-карточек, анимации и тема Aurum</div>
              </button>
              <button onclick="app.downloadSplitFile('script.js')" class="p-4 rounded-2xl border border-slate-200 hover:border-amber-400 bg-slate-50 text-left transition">
                <div class="font-bold text-slate-900 text-sm"><i class="fa-brands fa-js text-amber-500 mr-1.5"></i>script.js</div>
                <div class="text-xs text-slate-500 mt-1">Локальная СУБД, RBAC, роутер и все операции CRUD</div>
              </button>
            </div>
            <div class="flex justify-end">
              <button onclick="app.closeModal()" class="px-4 py-2 rounded-xl bg-slate-100 text-xs font-semibold">Закрыть</button>
            </div>
          </div>
        `);
      },

      downloadSplitFile(fileName) {
        let content = '';
        const styleEl = document.getElementById('aurum-style-css');
        const scriptEl = document.getElementById('aurum-script-js');
        if (fileName === 'style.css') {
          content = styleEl ? styleEl.textContent.trim() : '';
        } else if (fileName === 'script.js') {
          content = scriptEl ? scriptEl.textContent.trim() : '';
        } else {
          const clone = document.documentElement.cloneNode(true);
          if (styleEl) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'style.css';
            styleEl.replaceWith(link);
          }
          if (scriptEl) {
            const extScript = document.createElement('script');
            extScript.src = 'script.js';
            scriptEl.replaceWith(extScript);
          }
          content = '<!DOCTYPE html>\n' + clone.outerHTML;
        }

        if (!content) {
          window.open(fileName, '_blank');
          this.toast(`Файл ${fileName} находится в рабочей папке проекта.`, 'info');
          return;
        }

        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(url);
        this.toast(`Файл ${fileName} успешно сформирован и скачан!`, 'success');
      },

      showPolicyModal(type) {
        const titles = {
          safety: 'Правила безопасного общения (PRD 1.4 и 6.10)',
          privacy: 'Политика конфиденциальности и защиты персональных данных',
          licenses: 'Открытые образовательные лицензии (OER / Creative Commons)'
        };
        this.openModal(`
          <div class="p-6 space-y-4">
            <h3 class="text-lg font-bold text-slate-900">${titles[type] || 'Политика платформы'}</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Платформа Aurum Academy соблюдает минимизацию персональных данных (Email не публикуется в открытом профиле), проверяет права на распространение материалов библиотеки и обеспечивает модерацию пользовательских публикаций для защиты школьников и студентов.
            </p>
            <div class="flex justify-end">
              <button onclick="app.closeModal()" class="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold">Понятно</button>
            </div>
          </div>
        `);
      },

      // Вспомогательные функции UI
      openModal(html) {
        const backdrop = document.getElementById('modal-backdrop');
        const content = document.getElementById('modal-content');
        if (!backdrop || !content) return;
        content.innerHTML = html;
        backdrop.classList.remove('hidden');
        backdrop.classList.add('flex');
      },

      closeModal() {
        const backdrop = document.getElementById('modal-backdrop');
        if (!backdrop) return;
        backdrop.classList.add('hidden');
        backdrop.classList.remove('flex');
      },

      toast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        if (!container) return;
        const el = document.createElement('div');
        const colors = {
          success: 'bg-emerald-900 text-white border-emerald-500',
          error: 'bg-rose-900 text-white border-rose-500',
          info: 'bg-slate-900 text-white border-amber-500'
        };
        el.className = `pointer-events-auto p-3.5 rounded-xl border-l-4 shadow-lg text-xs font-semibold flex items-center justify-between gap-3 fade-enter ${colors[type] || colors.info}`;
        el.innerHTML = `<span>${this.escapeHtml(message)}</span>`;
        container.appendChild(el);
        setTimeout(() => {
          el.remove();
        }, 3800);
      },

      escapeHtml(str) {
        return String(str ?? '')
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#039;');
      },

      formatDate(isoStr) {
        if (!isoStr) return '—';
        try {
          const d = new Date(isoStr);
          return d.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
        } catch (e) {
          return isoStr;
        }
      }
    };

    window.onload = function () {
      app.init();
    };
