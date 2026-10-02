export type Blurb = { text: string; source?: string };
export type Retail = { label: string; url: string };

export type Book = {
  id: string;
  title: string;
  subtitle?: string;
  section: "nonfiction" | "fiction" | "poetry" | "translation";
  kind: string;
  language: "English" | "Nepali";
  cover: string;
  price: number;
  paragraphs: string[];
  blurbs?: Blurb[];
  retail?: Retail[];
  featured?: boolean;
};

const WP = "https://tulasiacharya.wordpress.com/wp-content/uploads";

export const AUTHOR_PHOTO = "/uploads/tulasi-acharya.png";
export const PAYPAL_EMAIL = "tulasi.acharya1@gmail.com";

export const books: Book[] = [
  {
    id: "like-water-on-leaves-of-taro",
    title: "Like Water on Leaves of Taro",
    subtitle: "A Himalayan Memoir",
    section: "nonfiction",
    kind: "Memoir",
    language: "English",
    cover: `${WP}/2020/03/9a875-frontcoveronlyfromamber073025.webp`,
    price: 16,
    featured: true,
    paragraphs: [
      "When Tulasi Acharya returns home to Nepal from the United States to celebrate his daughter's first birthday, he does not expect his world to be turned upside down. But when his mother-in-law dies suddenly, a joyful reunion becomes a season of mourning-and a journey through the fragile space between life and death.",
      "As his wife grieves and observes traditional rituals, Tulasi finds himself caring for his father-in-law, whose health is rapidly declining. What follows is a deeply personal account of a son-in-law's struggle to balance love, duty, and distance-caught between two continents, two families, and two ways of being. Amid hospital visits, cultural expectations, and the crushing weight of unspoken truths, Tulasi wrestles with questions of masculinity, caretaking, and how to tell someone they're dying.",
      "Set against the lush yet turbulent backdrop of Nepal during the COVID-19 pandemic, Like Water on Leaves of Taro weaves together themes of loss, resilience, identity, and hope. The memoir honors sacred rituals and everyday heartbreaks, from the thirteenth-day death feast to a father's wish to spare his daughter further grief. Through poetry, reflection, and memory, the author invites readers to witness the quiet strength of family, the complexity of Nepali culture, and the universality of sorrow.",
      "This is not just a story of illness and loss-it is a meditation on what it means to be human, to mourn, to endure, and to carry love forward in a world that feels constantly in flux.",
      "For readers of When Breath Becomes Air, The Year of Magical Thinking, and The Long Goodbye, Like Water on Leaves of Taro offers a moving cross-cultural perspective on grief, devotion, and the enduring lessons of death.",
    ],
    blurbs: [
      {
        text: "In Like Water on Leaves of Taro, Tulasi Acharya approaches personal loss with both emotional honesty and intellectual depth. Weaving his family's private sorrow with the global tragedy of theCOVID-19 pandemic, Acharya explores the limits of human endurance through a kaleidoscope of cultural, generational, and spiritual perspectives.\nHis prose is mesmerizing\u2014soft, lyrical, and deeply affecting. Acharya beautifully portrays the love and respect that binds his family, tenderly illustrating their struggle to make sense of a dark and complex world. With arresting clarity, he plunges readers into the vivid landscape of grief and the universal need to find meaning in loss. Ultimately, this memoir offers a stirring testament to the healing power of reflection, memory, and hope.",
        source: "The Book Life Prize",
      },
      {
        text: "Like Water on Leaves of Taro,\" Tulasi Acharya's poignant memoir invites readers into a deeply personal story shaped by love, loss, and the shifting ground beneath a family caught between continents and generations. With lyrical honesty, Tulasi reflects on fatherhood, grief, and the rituals that hold us together\u2014even as the world around us unravels. Set against the rich landscape of Nepal and shadowed by a global pandemic, this is a moving meditation on resilience, responsibility, and the fragile beauty of everyday life.",
        source: "Robert Gwaltney, award-winning author of The Cicada Tree",
      },
      {
        text: "In Like Water on Leaves of Taro, while Acharya's homecoming is filled with frustration and grief, readers, especially those mourning the loss of a relative or friend, will appreciate and find comfort in his quiet reflection on what gives his life real substance and meaning\u2014good health, being present to the moment, and cherishing and remembering those he loves.",
        source: "Kristine F. Anderson, author of the award-winning Crooked Truth and the award-winning Crooked Lines",
      },
      {
        text: "Like Water on Leaves of Taro is an incredibly heartbreaking memoir that tells of the shared experiences of a family coming to terms with an unimaginable and untimely loss. This memoir is a poignant read.",
        source: "Elizabeth Howard, Assistant Branch Manager Calhoun-Gordon County Library",
      },
      {
        text: "Like Water on Leaves of Taro: A Himalayan Memoir presents events and context from a fresh and honest perspective. The book highlights societal reluctance to openly discuss illnesses like cancer, especially with children, and this dynamic is artfully portrayed in the book. The writer has vividly and honestly portrayed the family calamity in the book.",
        source: "Prakash Sayami, Nepali Film Director, writer, and producer",
      },
      {
        text: "Like Water on Leaves of Taro: A Himalayan Memoir is an interdisciplinary text, which not only reflects the agonizing situation of the writer's spouse but also contributes to building public awareness about cancer. The book is a health awareness toolkit, while simultaneously conveying a family tragedy.",
        source: "Gita Tripathee, Nepali poet, lyricist, essayist, literary critic, and scholar",
      },
      {
        text: "The author's mastery of mystery and suspense is vividly apparent by how the reader is gripped through the final page of the book.",
        source: "Gopi Krishna Dhungana, Sub-editor of Annapurna Post",
      },
      {
        text: "The writer is engrossed in life, death, and meaningful life, with extensive references from philosophers, poets, essayists, and ethicists. The allusions range from a revered Hindu scripture, 'Mahabharat', and from 'Waste Land', a seminal modern poem by TS Eliot. The invocation of philosophy on the termination of life and yearning to seek meaning makes the book meditative and literary.",
        source: "Narayan Ghimire, Editor, New Agency of Nepal RSS",
      },
      {
        text: "This raw and riveting memoir offers a unique perspective on the author's experience of loss and love, death and birth within his family. Acharya pursues a Kafkaesque quest to navigate the tattered infrastructure of a health care system while honoring timeless rituals and social expectations as he seeks aid for his ailing father-in-law and grieving wife. By turns heart-stopping and poignant, this beautifully written work gives us a glimpse into the complex and intimate process of death and shows us ways to heal our souls after losses great and small. A must-read memoir!",
        source: "Bridget Pupillo, Editor",
      },
      {
        text: "This memoir by Dr. Acharya, focuses on various dimensions and experiences of life and death. Death is inevitable. This book also confirms that death cannot be avoided.",
        source: "Padam Bhattarai in Annapurna Post",
      },
      {
        text: "The strength of this book lies in its simple presentation and reflection about life and death. In times of trouble, we often experience ambiguity and wonder what now? What next? In his book, Like Water on Leaves of Taro: A Himalayan Memoir, author Dr. Tulasi Acharya openly talks about life and death by candidly approaching the subject in a clear and simple manner designed to resonate with us all.",
        source: "Badri Prasad Dhakal, Author",
      },
    ],
    retail: [
      {
        label: "Amazon",
        url: "https://www.amazon.com/Like-Water-Leaves-Taro-Himalayan-ebook/dp/B0FKCQZH3W",
      },
    ],
  },
  {
    id: "sex-desire-and-taboo-in-south-asia",
    title: "Sex, Desire, and Taboo in South Asia",
    subtitle: "Religion, Culture of Ability, and Patriarchy",
    section: "nonfiction",
    kind: "Academic",
    language: "English",
    cover: `${WP}/2025/01/untitled-design-43-1.png`,
    price: 34,
    paragraphs: [
      "Sex, Desire, and Taboo in South Asia: Religion, Culture of Ability, and Patriarchy explores the intersection of religion, culture of ability, and patriarchy in relation to sex, desire, and taboo. Divided into six chapters, this book utilizes Western theorists such as Foucault and Freud in conjunction with Spivak's theory of the subaltern to establish a theoretical context on sexuality. Through this lens, Acharya evaluates the intersection between religion, patriarchy, and gender and their impact on the perception of sex and desire as a taboo within a South Asian context. The book also examines how individuals contend with their sexual desires, using literature and social media to display the stark difference between the cultural promotion of antisexualism and existing ancient texts on the art of erotica, such as the Kamasutra. In doing so, Sex, Desire, and Taboo in South Asia expands on Eurocentric notions of sexuality and addresses the conditions of the subaltern to explore the complex dynamics of sex in South Asia.",
    ],
    blurbs: [
      {
        text: "Sex, Desire, and Taboo in South Asia: Religion, Culture of Ability, and Patriarchy accurately encapsulates the themes and discussions within the book. The work's distinctive contribution to the literature is highly appreciated, addressing vital gaps in understanding the intersectionality of Sex, Desire, and Taboo in South Asia: Religion, Culture of Ability, and Patriarchy in the South Asian context. The book promises to be a valuable addition to scholarly discourse, providing nuanced insights into a complex and multifaceted subject matter.",
        source: "Kay Traille, Kennesaw State University",
      },
      {
        text: "The book critically examines the paradoxes and complexities surrounding sex, desire, and taboo in Nepal and India, situated within their cultural and religious context. Employing a multidisciplinary approach that draws on Foucauldian theory, psychoanalysis, and cultural critique, the book provides a comprehensive analysis of the ways in which religion, culture, and patriarchy influence perceptions of sex and desire. The book serves as a thought-provoking exploration of the intersection between tradition, modernity, and human sexuality in the Global South, advocating for a nuanced understanding that transcends Western frameworks and embraces the local context.",
        source: "Bhanu Bhakta Acharya, University of Canada",
      },
      {
        text: "Sex, Desire, and Taboo in South Asia is a book that is hopefully the start of an expanding discussion about sexuality and eroticism. Up until recently such a discussion has been dominated by Western voices privileging the Western experience and concerns. Acharya's book is a fascinating study showing how such a discussion has been predated by far older discourses about body and desire from other parts of the world. As many in the West are now re-thinking what was previously thought to be basic natural categories, this book is a very helpful and important addition to that discussion.",
        source: "Fred Fejes, Florida Atlantic University",
      },
      {
        text: "Acharya's volume offers a comprehensive view of sexuality in South Asia from the classical past to the present. With a firm theoretical grounding, Acharya applies the concepts of taboo and transgression, along with colonial oppression, in order to trace a shift from a more open and artistic eroticism to a dominant, patriarchal discourse of sexual repression. Carefully researched with extensive bibliography, this text compiles a wealth of information from literary and film works, the visual arts tradition, online survey responses, and contemporary religious practices. Acharya moves away from heteronormative notions of sexuality to explore transgender, intersex, and sex and disability in contemporary South Asia. Acharya's volume shows how literature and the arts push the boundaries of sexuality in South Asian society by revealing glimpses of a multifaceted reality hidden beneath patriarchal strictures and norms. With its accessible prose and its thoughtful and sensitive approach, Acharya's text will be a touchstone for scholars and general readers alike.",
        source: "Bridget Pupillo, Connecticut College",
      },
      {
        text: "Dr. Tulasi Acharya's Sex, Desire, and Taboo in South Asia explores the paradoxes of a region where erotic art and sexual manuals have long existed, yet open discussions about sex remain taboo.",
        source: "Kosh Raj Koirala, Republica",
      },
      {
        text: "Sex, Desire, and Taboo in South Asia is a provocative and timely contribution to the ongoing discourse about sexuality, power, and culture in the region. It challenges readers to rethink the complex relationship between religion, culture, and patriarchal structures, offering new insights into how societal change may be achieved through education and greater awareness.",
        source: "Gopi Krishna Dhungana, The Annapurna Express",
      },
      {
        text: "The book's strength lies in its tackling of otherwise unexplored themes, such as the sexual habits of older persons\u2014a subject that is not only under-researched but also a taboo for discussion, especially in India. The book's rather strong and relevant conclusion that 'until the healthy understanding of sex replaces the current cultural discourses and rhetoric of sex in South Asia, no punishment will be able to stop rape incidents' (p. 185)\u2026the book drives home Acharya's argument that social taboos, under the garb of civilization, prevented discussions about sex and sexuality, deteriorating it into something 'uncivilized and filthy,' an act exploited as a commodity or a means of generating capital, rather than being perceived as a 'crucial aspect of healthy living' (p. 187). The book would be of interest to scholars of social anthropology, sociology, and those studying South Asia.",
        source: "Devapriya Sanyal, St. Joseph's University, Book review published in South Asia Research, Sage Journal.",
      },
    ],
    retail: [
      {
        label: "Amazon",
        url: "https://www.amazon.com/Sex-Desire-Taboo-South-Asia/dp/1666957194",
      },
      {
        label: "Bookshop",
        url: "https://bookshop.org/p/books/sex-desire-and-taboo-in-south-asia-religion-culture-of-ability-and-patriarchy-tulasi-acharya/41f59ad1053787b4?ean=9781666957198",
      },
      {
        label: "Barnes and Noble",
        url: "https://www.barnesandnoble.com/w/sex-desire-and-taboo-in-south-asia-tulasi-acharya/1145619076?ean=9781666957198",
      },
      {
        label: "Books-A-Million",
        url: "https://www.booksamillion.com/p/Sex-Desire-Taboo-South-Asia/Tulasi-Acharya/9781666957198",
      },
    ],
  },
  {
    id: "public-administration-and-organization-theory",
    title: "Public Administration and Organization Theory",
    subtitle: "An Annotated Bibliography",
    section: "nonfiction",
    kind: "Academic",
    language: "English",
    cover: `${WP}/2025/01/untitled-design-42-1.png`,
    price: 42,
    paragraphs: [
      "Public Administration and Organization Theory: An Annotated Bibliography:  The book surveys crucial theories and practices and academic research in the field of public administration and Organizational theory. It outlines ground breaking findings and arising from quality research works from the past to the present\u2015especially focused on articles that are both timely and contextual. Each chapter opens with a theme, explains its relevance within the context and presents a critical annotated bibliography of the articles under the theme and provides a thematic conclusion of the chapter.",
      "This book will be a valuable resource for teachers, researchers and students in the field of public administration.",
    ],
    retail: [
      {
        label: "Amazon",
        url: "https://www.amazon.com/Public-Administration-Organization-Theory-Bibliography/dp/1032729139",
      },
    ],
  },
  {
    id: "unveiling-taboo-topics",
    title: "Unveiling Taboo Topics",
    subtitle: "A Collection of Reviews of Tulasi Acharya's Works",
    section: "nonfiction",
    kind: "Criticism",
    language: "English",
    cover: `${WP}/2025/02/unveiling-taboo-topics-a-collection-of-reviews-of-tulasi-acharyas-works-1-2.png`,
    price: 18,
    paragraphs: [
      "Unveiling Taboo Topics: A Collection of Reviews of Tulasi Acharya's Works: This compelling collection brings together critical insights and thought-provoking reviews of the works of Tulasi Acharya, a prolific writer whose books challenge conventional perspectives on complex societal issues. Unveiling Taboo Topics offers a rich analysis of a diverse range of Acharya's works, including Sex, Desire and Taboo in South Asia, Sex, Gender and Disability in Nepal, Mochan, Running from the Dreamland, Mrityu Diary, Swapnabhumi, and others.",
      "The book features contributions from a distinguished group of scholars and writers, each offering their unique perspectives on Acharya's exploration of taboo topics that often go unspoken in mainstream discourse. From gender and disability to the hidden aspects of South Asian sexuality, Acharya's work opens up challenging conversations about culture, identity, and societal norms. The contributors to this volume\u2014Aashish Mishra, Badri Prasad Dhakal, Chandra Khadka, D. R. Rai, Dandi Raj Bibek, Devapriya Sanyal, Dijan Bhattarai, Gopi Krishna Dhunaga, Gyanu Adhikari, Harka Bahadur Lamgade, Kay Traille, Kosh Raj Koirala, L B Thapa, Mahesh Paudyal, Mark Taylor, Narayan Prasad Ghimire, Padam Bhattarai, Shyam Gaire, and Shyam Rimal\u2014offer diverse insights into how Acharya's writing navigates complex social, cultural, and philosophical landscapes.",
      "This collection not only showcases the literary brilliance of Tulasi Acharya but also underscores the power of literature in breaking down barriers and confronting uncomfortable truths. Unveiling Taboo Topics is a must-read for anyone interested in exploring the intersection of taboo, culture, and human experience in South Asian literature.",
    ],
    retail: [
      {
        label: "Amazon",
        url: "https://www.amazon.com/Unveiling-Taboo-Topics-Collection-Acharyas-ebook/dp/B0DXX3V88G",
      },
    ],
  },
  {
    id: "mrityu-diary",
    title: "मृत्यु डायरी",
    subtitle: "Mrityu Diary",
    section: "nonfiction",
    kind: "Nonfiction",
    language: "Nepali",
    cover: `${WP}/2025/01/untitled-design-47-1.png`,
    price: 15,
    paragraphs: [
      "'मृत्यु डायरी' प्रियजन गुमाउनेहरू वा मृत्युलाई चिन्न र बुझ्नेहरूप्रति समर्पित छ । यो वियोगको मात्र कथा नभएर योगको पनि कथा खोज हो । यसभित्र सर्वप्रथम योग त्यसपछि वियोग र वियोगले जुराइदिएको जीवनको सर्वोत्कृष्ट संयोग समेटिएको छ । यो जीवनप्रतिको आसा, भरोसा, आत्मविश्वास र प्रेरणाको कथा हो । क्यान्सर, कोरोना, मोर्फिन, प्यालिएटिभ केयर, मृत्यु र ती विषयवस्तुमाथिको अनुसन्धान र ह्याम्लेटको नियतिको कथा लेखनले पुस्तकलाई रोचक र पठनीय बनाएको छ ।",
      "The book vividly portrays the depths of human vulnerability and resilience. It explores themes of mortality, palliative care, fear, and the transformative nature of human connections, revealing the delicate balance between life and death and imparting invaluable lessons on mortality.",
    ],
    blurbs: [
      {
        text: "पुस्तकले जीवन र मृत्युलाई गहिरिएर नियाल्ने अवसरमात्र दिएको छैन, जीवन र मृत्युको पाठ पनि सिकाएको छ ।",
        source: "के ट्रेल",
      },
      {
        text: "जीवनबाट बिदा मागेका रेशमलालको कथा हो, 'मृत्यु डायरी' । लेखकले व्यक्तिगत विषय, घटना र चरित्रलाई 'सार्वभौम' बनाइदिएका छन् । लेखक पुस्तकमा पोखिँदा मैले पाएको 'चुरो-कुरो' भनेकै लेखकीय इमान्दारिता हो । पुस्तकले दुइवटा पक्ष पाठकलाई दिएको छ– एउटा 'फिलिङ्स' र अर्को 'गाउँले पारा' । भन्छु– पुस्तक पढिरहँदा पाठक चलचित्र हेरिरहेको हुनेछन् ।",
        source: "गोपीकृष्ण ढुंगाना, साहित्यकार/सञ्चारकर्मी",
      },
    ],
    retail: [
      {
        label: "Amazon",
        url: "https://www.amazon.com/%E0%A4%AE%E0%A5%83%E0%A4%A4%E0%A5%8D%E0%A4%AF%E0%A5%81-%E0%A4%A1%E0%A4%BE%E0%A4%AF%E0%A4%B0%E0%A5%80-Mrityu-Diary-%E0%A4%B5%E0%A4%BF%E0%A4%AF%E0%A5%8B%E0%A4%97%E0%A4%A6%E0%A5%87%E0%A4%96%E0%A4%BF-ebook/dp/B0CHHX8JKZ",
      },
    ],
  },
  {
    id: "sex-gender-and-disability-in-nepal",
    title: "Sex, Gender, and Disability in Nepal",
    subtitle: "Marginalized Narratives and Policy Reform",
    section: "nonfiction",
    kind: "Academic",
    language: "English",
    cover: `${WP}/2025/01/untitled-design-45-1.png`,
    price: 38,
    paragraphs: [
      "Sex, Gender, and Disability in Nepal: This book explores the sex lives of women with disabilities in Nepal, showing that many women suffer more than men despite prevailing disability policies that emphasize nondiscrimination against people with disabilities. It also argues that far from general perceptions of women as asexual, women with disabilities are capable of leading highly creative and fulfilling sexual lives.",
      "Using critical sexual theory and postcolonial studies as critical frameworks, the book investigates the narratives of authors with disabilities, exploring policy gaps and the need for supportive gender and sexual policies through the words of those affected. In particular, the book analyzes five female Nepali authors with disabilities: Radhika Dahal, Jhamak Ghimire, Sabitri Karki, Parijaat, and Mira Sahi, demonstrating the need for supportive gender policies to address the emotional and psychological needs of women with disabilities. Overall, the book argues that disciplinary discourses in practice often consider sex or sexuality as taboo, barely recognizing women in the context of marriage and family, and therefore creating gaps between policies and marginalized narratives.",
      "This book provides important insights into sex and disability within the context of the Global South, and as such will be of interest not only to researchers working on Nepal but also to scholars across gender studies, disability studies, international development, and postcolonialism.",
    ],
    retail: [
      {
        label: "Amazon",
        url: "https://www.amazon.com/Sex-Gender-Disability-Nepal-Marginalized/dp/0367358794",
      },
    ],
  },
  {
    id: "handbook-of-professional-business-technical-writing",
    title: "Handbook of Professional, Business & Technical Writing, and Communication and Journalism",
    subtitle: "A Reference Guide to all kinds of writing",
    section: "nonfiction",
    kind: "Reference",
    language: "English",
    cover: `${WP}/2025/01/untitled-design-44-2.png`,
    price: 25,
    paragraphs: [
      "\"One of the best new Journalism books\" – BookAuthority",
      "\"One of the Best New Technical Writing Books\"- BookAuthority",
      "\"One of the best new Communication books\" – BookAuthority. This book is divided into two parts. Part one deals with technical topics in writing, such as business writing, proposal writing, writing for research, digital writing and other technical topics in writing, including even technical topics in literature.",
      "Part two is entirely on the topic of mass communication and journalism. The second part covers at length the issues and matters relating to mass communication and journalism, theories, and some technical aspect of editing, proofreading, photo editing, reporting, lay-out, broadcasting media, and so on.",
      "The aim of this book is to explore those technical writing topics in bulleted points, with the topics ranging from technical to business to academic to creative to digital to mass communication and journalism. The bulleted points will help better understand and memorize certain dos and don'ts of writing and writing guidelines.",
      "There are tons of materials available online and in published books about writing scattered randomly, but not a single focused book that cater the needs of students and writers for a thorough understanding of all kinds of technical topics in writing.",
    ],
    retail: [
      {
        label: "Amazon",
        url: "https://www.amazon.com/Handbook-Professional-Technical-Communication-Journalism/dp/B09B359XB2",
      },
    ],
  },
  {
    id: "katai-bomb-katai-bamjan",
    title: "कतै बम, कतै बम्जन",
    subtitle: "Katai Bomb, Katai Bamjan",
    section: "nonfiction",
    kind: "Essays",
    language: "Nepali",
    cover: `${WP}/2025/01/untitled-design-51-1.png`,
    price: 9.99,
    paragraphs: [
      "कामसूत्रमा वर्णन गरिएका यौनिक क्रियाकलाप होउन् वा मन्दिरका टुँडालतिर देखिने ईश्वरका विभिन्न यौनजन्य आसन र रतिराग, तपस्यारत विश्वामित्रको मेनकासँगको सम्बन्धको सन्दर्भ होस् वा यो संसारमा सृष्टिको अस्तित्व र सम्भावनाको प्रसङ्ग वा यौनको महत्त्व माथिको बहस होस् वा अपाङ्गताका कुरा वा हुन् समय, परिवेश, नेतृत्व, द्वन्द्व र अरू कयौं प्राकृतिक तथा कृत्रिम हलचलहरू वा हुन् साहित्य, समालोचना, जातीयता र विविध, यी सबै विषयवस्तु माथि लेखिएका रचनाहरूको सँगालो हो यो पुस्तक । यस पुस्तकमा सङ्कलित सबै रचनाहरू नेपालबाट प्रकाशित हुने राष्ट्रिय दैनिक कान्तिपुर, अन्नपूर्ण पोस्ट तथा गोरखापत्रमा छापिएका हुन् ।",
    ],
    retail: [
      {
        label: "Amazon",
        url: "https://www.amazon.com/Katai-Bomb-Bamjan-%E0%A4%95%E0%A4%A4%E0%A5%88-%E0%A4%AC%E0%A4%AE%E0%A5%8D%E0%A4%9C%E0%A4%A8/dp/B0BHMXMRKK",
      },
    ],
  },
  {
    id: "living-by-memories",
    title: "Living by Memories",
    subtitle: "A collection of English articles published in national daily newspapers",
    section: "nonfiction",
    kind: "Essays",
    language: "English",
    cover: `${WP}/2025/01/untitled-design-52-1.png`,
    price: 18,
    paragraphs: [
      "Living by Memories is a collection of the finest articles on different topics, such as love, humanity, politics, nostalgia, society, relationship, art and culture and literature, research, life and death and diseases, and much more. The writer expresses life and culture and society, how he lived, people he talked to, the world he saw and experienced. Beautifully crafted, the articles are highly creative force while they are based on facts, observations, impressions, readings, reflections, imaginations, and predictions. The articles offer an eclectic mix of subjects and remain testimony to the stories they tell. Divided into three parts— part one is a collection of three or more-page long articles; part two is a collection of one- two-page long articles; and part three is a collection of articles in Nepali— all the articles were published in national print and online newspapers in Nepal.",
    ],
    retail: [
      {
        label: "Amazon",
        url: "https://www.amazon.com/Living-memories-collection-published-newspapers/dp/B09RQ2VLBT",
      },
    ],
  },
  {
    id: "class-rigidity-in-jane-austens-persuasion",
    title: "Class Rigidity in Jane Austin's Persuasion",
    section: "nonfiction",
    kind: "Criticism",
    language: "English",
    cover: `${WP}/2025/01/untitled-design-55-1.png`,
    price: 12,
    paragraphs: [
      "Class Rigidity in Jane Austin's Persuasion: New Historicism has become significant in the criticism of Medieval and nineteenth-century British and American literature, and it is making its way into the criticism of modernist literature and eighteenth-century literature as well. The role of New Historicists is to create a more cultural or anthropological criticism, one that is conscious of its own status as interpretation and intent upon understanding literature as part of a system of signs that constitute a given culture. Literary criticism and cultural critique are integrated, with the critic's role being to investigate both the social presence of the literary text in the world and the social presence of the world in the literary text. The book has highlighted the social rules, codes, or norms articulated within the text acknowledging their own predispositions and cultural biases while exploring how the multiple voices within a text are balanced, reconciled, or subverted. With a concern for questions of power and culture, the book has demonstrated how Jane Austen is guided by the ideology of class-consciousness. The book has examined the multiple voices of the characters, provided a detailed description of the text, and delved into the political and social situations as essential components.",
    ],
    retail: [
      {
        label: "Amazon",
        url: "https://www.amazon.com/Class-Rigidity-Jane-Austins-Persuasion/dp/B0CFZL3HRH",
      },
    ],
  },
  {
    id: "running-from-the-dreamland",
    title: "Running from the Dreamland",
    subtitle: "A Story of Struggle, Hardship, Commitment, and American Dream",
    section: "fiction",
    kind: "Novel",
    language: "English",
    cover: `${WP}/2025/01/untitled-design-48-1.png`,
    price: 25,
    featured: true,
    paragraphs: [
      "Running from the Dreamland: Deepak comes to America immediately mesmerized by the immensity of its abundance. After leaving Nepal to earn a graduate degree in the U.S., his plan is to make his fortune in the land of opportunity. He quickly learns America is more than he bargained for, especially his newfound \u201cfriends.\u201d He questions whether he can even survive, much less succeed, in this new country. The challenge seems even more insurmountable when he settles into his new residence and job, where situations occur that test his resilience and will. In the midst of his agony, he finds one thing that could possibly make the experience ultimately worthwhile. Will she leave or betray him like everyone else has?",
    ],
    blurbs: [
      {
        text: "This novel sees America through the eyes of a visiting student from Kathmandu as he struggles to make a life in his new land. . . . Importantly, this story gives us insight into the immigrant experience and the difficulties and joys of adjusting to a new culture.",
        source: "Anthony Grooms, author of Trouble No More and Bombingham",
      },
    ],
    retail: [
      {
        label: "Amazon",
        url: "https://www.amazon.com/Running-Dreamland-Tulasi-Acharya/dp/0988733293",
      },
      {
        label: "Bookshop",
        url: "https://bookshop.org/p/books/running-from-the-dreamland-tulasi-acharya/18830655?ean=9781088054598",
      },
      {
        label: "Barnes and Noble",
        url: "https://www.barnesandnoble.com/w/running-from-the-dreamland-tulasi-acharya/1118002816?ean=9789937784184",
      },
      {
        label: "Books-A-Million",
        url: "https://www.booksamillion.com/p/Running-from-Dreamland/Tulasi-Acharya/9789937784184",
      },
    ],
  },
  {
    id: "swapnabhumi",
    title: "स्वप्नभूमि",
    subtitle: "Swpnabhumi",
    section: "fiction",
    kind: "Novel",
    language: "Nepali",
    cover: `${WP}/2025/08/swapnabhumi-4.jpg`,
    price: 9.99,
    paragraphs: [
      "स्वप्नभूमि (Swpnabhumi): \"अमेरिकालाई सपनाको देश देखेर नेपाल छाड्नेहरू प्रकारान्तरले नेपाललाई नै स्वप्नभूमि देख्न थाल्छन् भन्ने भावमा सिर्जित यो उपन्यास चलायमान प्रवासी नेपालीहरूको मनस्थितिको सुन्दर चित्रण हो । यो सपना खोज्न विदेशिने युवा र तिनका अभिभावक तथा आफन्तजनले पढ्नैपर्ने कृति बनेको छ ।\"",
    ],
    blurbs: [
      {
        text: "अमेरिकालाई सपनाको देश देखेर नेपाल छाड्नेहरू प्रकारान्तरले नेपाललाई नै स्वप्नभूमि देख्न थाल्छन् भन्ने भावमा सिर्जित यो उपन्यास चलायमान प्रवासी नेपालीहरूको मनस्थितिको सुन्दर चित्रण हो । यो सपना खोज्न विदेशिने युवा र तिनका अभिभावक तथा आफन्तजनले पढ्नैपर्ने कृति बनेको छ ।",
        source: "डा. रामजी तिमल्सिना",
      },
      {
        text: "उदीयमान उपन्यासकार तुलसी आचार्य आप्रवासनको अलिनो अनुभवलाई आख्यानको कलेवर दिन सफल छन् । यसको विषय र प्रस्तुति कति कौतुकमय छ भने पाठकले कतै पनि थकाई मार्न पाउँदैन । विदेशको वैभव देखेर असली नेपाली मन कत्ति पनि विचलित हुँदैन भन्ने सत्यघोष गर्नु यसको अभिप्राय: हो । 'स्वप्नभूमि' मा यथार्थ र आदर्श अनि आख्यान र गैरआख्यान जम्काभेट भइरहन्छ ।",
        source: "राजकुमार बानियाँ",
      },
    ],
    retail: [
      {
        label: "Amazon",
        url: "https://www.amazon.com/%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%AA%E0%A5%8D%E0%A4%A8%E0%A4%AD%E0%A5%82%E0%A4%AE%E0%A4%BF-Swpnabhumi-Tulasi-Acharya/dp/B0BRCC2LTV",
      },
    ],
  },
  {
    id: "mochan",
    title: "मोचन",
    subtitle: "Mochan — An action packed Nepali novel on duality of love, life, and relationship between two continents, leading to meditation and resolution",
    section: "fiction",
    kind: "Novel",
    language: "Nepali",
    cover: `${WP}/2025/03/untitled-design-49.png`,
    price: 12,
    paragraphs: [
      "Mochan: पारिजातको 'शिरीषको फूल'लाई प्रस्थानबिन्दु बनाएर न्यून पात्रहरूको उपस्थापनमा जीवन भोगाइका अनेक आयाम अभिरेखित यो उपन्यासले जीवनका अक्करिला बाटा र सम्बन्धका अनपेक्षित मोडलाई सादृश्य गराउँदै आशा र निराशाजन्य अभिव्यक्ति एकसाथ मुखरित गरेको छ । नेपाल र अमेरिकाको परिवेश र जीवन पद्धतिको रोचक वर्णनले कथानक जीवन्त बनेको मात्र छैन पाठकलाई नयाँ खुराक समेत पस्किएको छ । यो संघर्षशील एक पात्रको यस्तो जीवनयात्राको आलेख हो जसले पाठकलाई पात्रसँगै सानिध्य गराउँछ; दुःखि बनाउँछ, खुसि बनाउँछ, हँसाउँछ र रुवाउँछ पनि ।",
      "जीवनदर्शन, ध्यान, योग र अध्यात्मका अलावा वैवाहिक र विवाहेत्तर रतिराग र प्रेम प्रणयको चित्ताकर्षक वर्णन मूलतः वयस्क पाठकलाई अझ बढी अर्थपूर्ण र उपयोगी छ । कथानकको संरचना र प्रस्तुतीले पाठकलाई यसरी लट्ठ्याउँछ कि उपन्यास समाप्त नहुँदासम्म पाठकले न परिणामको आँकलन गर्न सक्छ न पठनलाई विश्राम नै दिन सक्छ ।यस उपन्यासमा एक पुरुष पात्रको प्रेम, माया र सम्बन्धको अन्तरङुग प्रस्तुत छ । पारिवारिक उत्साहका साथ विवाह गरेर ल्याइएकी श्रीमतीसँग सम्बन्धको बढुदो टकराब र चिसोपनले ऊ पारपाचुके नै नगरी अलग्गिन्छ र अर्कै युवतीसँग विवाह गर्छ ।",
      "स्थापित सम्बन्धको बिग्रह र नयाँ सम्बन्धको थालनीबीचको दुर्दान्त पीडा, मानसिक तनाव, जिजीविषा, विजिगीषा र प्राप्त ज्ञान 'इपिफेनी' नै यो उपन्यासको कथ्य हो । उक्त पात्रले सहजताबाट असहजतातर्फ, अपरिपक्वताबाट परिपक्वतातर्फ, प्रेम–घृणा–प्रेमबाट प्रगाढ र प्रेमिल सम्बन्धतर्फ, भौतिकताबाट अध्यात्मतर्फ र देखिएको जीवनबाट भोगिएको जीवनतर्फको यात्रा गरेको छ । प्रेम र आत्मीय सम्बन्ध साँचो अर्थमा के हो ? यसलाई आत्मसात गर्न नसक्ता जीवन कसरी क्षतबिक्षत हुन्छ ? उपन्यास दृष्टान्त छ ।भावना, घृणा र संवेदनाको अन्तर्य प्लावित यस उपन्यासले अस्तित्ववादी चिन्तन र शून्यवादी दर्शनको छनकका साथ सम्बन्धको उच्चता र गहिराइको मर्मलाई अत्यन्त मार्मिक ढङगले प्रस्तुत गरेको छ ।",
    ],
    retail: [
      {
        label: "Amazon",
        url: "https://www.amazon.com/Mochan-relationship-continents-meditation-resolution/dp/993770555X",
      },
      {
        label: "Bookshop",
        url: "https://bookshop.org/p/books/2350-2379-2330-2344-tulasi-acharya/18830805?ean=9781088060032",
      },
      {
        label: "Barnes and Noble",
        url: "https://www.barnesandnoble.com/w/2350-2379-2330-2344-tulasi-acharya/1142206739?ean=9781088060032",
      },
      {
        label: "Books-A-Million",
        url: "https://www.booksamillion.com/p/Tulasi-Acharya/9781088060032",
      },
    ],
  },
  {
    id: "dinbhari-pani-parirahanchha",
    title: "दिनभरि पानी परिरहन्छ",
    subtitle: "A collection of Nepali poems",
    section: "poetry",
    kind: "Poetry",
    language: "Nepali",
    cover: `${WP}/2026/05/untitled-design-87.png`,
    price: 14,
    paragraphs: [
      "तुलसी आचार्यका प्रस्तुत सङ्कलनका कवितामा जीवनका अनेकौंँ आयामहरूको मार्मिक र भावनात्मक चित्रण भएको छ । बाआमाको पहिरनको स्मृति र आफ्नो बालकले उजागर गरेका पुस्तान्तरका सम्झनामा लेखिएका कविताहरूबाट आरम्भ भएको सङ्ग्रहले विषयहरूको प्रयोगात्मक संयोजन गरेको छ । तिनमा बा र हजुरबाको, \"आमाका भोगाइ\"हरू अनि देशको सम्झनाको अत्यन्त मार्मिक प्रकारले प्रयोग गरिएको छ । कविताका विषयहरू साधारणदेखि लिएर अधिकाव्यिक, दार्शनिक र मातृभूमिजन्य शीर्षकहरूमा फैलिएका छन् । स्मृति र प्रणयरागको प्रयोग अनि आफू सम्प्रति कालमा बसेको भूमि जर्जियाले दिएका काव्यिक क्षणहरूमाथिका उद्गार यो सङ्कलनका कविताको अर्को सुन्दर पक्ष हो । नेपालमा आफ्नी पत्नीलाई लेखेको पत्र र नेपाल भूमिको स्मृतिसँग जोडिएर लेखिएका कविताहरू मार्मिक र आकर्षक छन् । केही गद्यात्मक शैलीमा अनि कङ्क्रिट पोइट्रीको शब्दचित्रजन्य प्रयोग गरी लेखिएका कवितामा आचार्यको काव्यसाधनाको फराकिलो पक्ष भेटिन्छ । समग्रमा, योे जीवनका सहज, चुनौतीपूर्ण र भावात्मक पक्षमा लेखिएका पठनीय कविताहरूको सङ्कलन हो ।",
      "– डा. अभि सुवेदी",
    ],
    retail: [
      {
        label: "Available on Amazon",
        url: "https://www.amazon.com/%E0%A4%A6%E0%A4%BF%E0%A4%A8%E0%A4%AD%E0%A4%B0%E0%A4%BF-%E0%A4%AA%E0%A4%BE%E0%A4%A8%E0%A5%80-%E0%A4%AA%E0%A4%B0%E0%A4%BF%E0%A4%B0%E0%A4%B9%E0%A4%A8%E0%A5%8D%E0%A4%9B-poems-traditional-experimental/dp/B0GZG747ZZ",
      },
    ],
  },
  {
    id: "i-wont-marry",
    title: "I Won't Marry",
    subtitle: "Poems",
    section: "poetry",
    kind: "Poetry",
    language: "English",
    cover: `${WP}/2025/01/untitled-design-50-2.png`,
    price: 12,
    paragraphs: [
      "I Won't Marry: These are the poems oozed out of the poet's experience and perception looking at people and the world around him. Most of the poems are on the theme of love, life, and liberty.",
      "They cover a decade long time period in the Himalayan country of Nepal that was affected by People's war.",
      "All poems carry emotions, human sentiments, and remnants of war, poverty, and loss of lives.",
      "Brilliant poetry, strong images, very poetic!",
    ],
    retail: [
      {
        label: "Amazon",
        url: "https://www.amazon.com/I-Wont-Marry/dp/055757787X",
      },
    ],
  },
  {
    id: "a-collection-of-shakespeares-stories",
    title: "A collection of Shakespeare's stories",
    subtitle: "Translated into Nepali",
    section: "translation",
    kind: "Translation",
    language: "Nepali",
    cover: `${WP}/2024/06/red-photo-architecture-book-cover-13-1.png`,
    price: 15,
    paragraphs: [
      "A collection of Shakespeare's stories: The book is a translated-into-Nepali-collection of Shakespeare's stories, originally in English edited by Charles Lamb and Mary Lamb. Translated stories are: The Tempest, A Midsummer Night's dream, The Winter's Tale, Much Ado About Nothing, As You Like It, The Merchant of Venice, Macbeth…",
    ],
    blurbs: [
      {
        text: "तुलसीले अनुवादका माध्यमबाट संस्कृतिको त्यो सञ्चरण हुने प्रक्रियालाई सुन्दर किसिमले अगाडि ल्याएका छन् । शेक्सपियरको एउटा युगलाई हाम्रो समाजमा राखेका छन् । तुलसीको अनुवादले संस्कृतिको सामाजिक विरासतलाई भाषाका माध्यमबाट सम्प्रेषण गर्ने काम गरेको छ । विचारलाई मर्न नदिइकन उनले त्यो गरेका छन् । यो संस्कृतिको एउटा महौवपूर्ण पक्ष हो । तुलसीले संस्कृतिको महौव कत्तिको हुन्छ बुझेका छन् र उनले अनुवादबाट नेपाली भाषामा साँस्कृतिक सम्बन्ध स्थापित गरेका छन् । अहिलेको सभ्य र भूमण्डलीकरणको यस युगमा संस्कृतिले धेरै ठूलो महौव राख्छ । साँस्कृतिक सम्बन्ध विस्तारका लागि अनुवादले त्यत्तिकै ठूलो महौव राख्छ । यस कुरालाई प्रस्तुत कथाहरूले प्रष्टसँग झल्काएका छन् । एक ठाउँको समाज, संस्कृति र सभ्यतालाई अर्को ठाउँमा पुऱ्याउनु र एक भाषाको विचार, व्यवहार र प्रणालीलाई अर्को भाषामा ल्याउनु र त्यो पनि साहित्यिक माध्यमबाट ल्याउनु सजिलो कुरा होइन । तुलसीले त्यसलाई कलाका साथ सहज बनाएका छन् । तुलसीले प्रस्तुत कथाहरूमार्फत आफूलाई साहित्यिक र साँस्कृतिक राजदूतका रूपमा नेपाली साहित्यमा उभ्याएका छन् । अङ्ग्रेजीका धनी संस्कृति, साहित्य र समाजलाई नेपाली भाषामा भिऴयाएका छन् । बेग्लै स्वाद, बेग्लै शब्दमा भिऴयाएका छन् । फरक समाजलाई फरक आँखामा ल्याएर राखेका छन् । नयाँ गरेर राखेका छन् । सन्देश पुऱ्याउने गरेर राखेका छन् । यो रखाइले पात्रहरूले गम्भीर परिचय दिएका कारण संसारका यी कथाहरूको उपस्थिति बाँकी छ ।",
        source: "गोपाल पराजुली, कोटेश्वर, काठमाडौं, मदन पुरस्कार प्राप्त साहित्यकार",
      },
      {
        text: "विश्व नाट्य साहित्यमा विलियम शेक्सपियरको भूमिकाबारे सबैलाई थाहै छ । उनका नाटकहरू केही विशेष आख्यान, खास गरेर पुनर्जागरणकालीन युरोपमा प्रचलित कथाहरूमा आधारित थिए । तिनै कथाहरूलाई अनुवादमार्फत नेपाली पाठकहरू समक्ष ल्याइदिएर तुलसीप्रसाद आचार्यले एउटा महौवपूर्ण साँस्कृतिक योगदान दिएका छन् । अनुवाद विधामा पहिलोपटक कलम चलाएका भए पनि तुलसीको शैलीमा खास खोट लगाउने स्थिति छैन । उनले कथाको शाब्दिक अनुवाद मात्र नगरेर तिनको भावनात्मक परिवेशको समेत सटिक अनुवाद गरेका छन् । अनुवाद विधा समसामयिक नेपाली साहित्यको अत्यन्त महौवपूर्ण विधा हो । भविष्यमा पनि यस विधामा तुलसीको कलम लगातार चलिरहोस् भन्ने कामना गर्दछु ।",
        source: "डा. सञ्जीव उप्रेती, लेखक, प्राध्यापक अङ्ग्रेजी साहित्य",
      },
    ],
    retail: [
      {
        label: "Amazon",
        url: "https://www.amazon.com/Collection-Shakespeares-Stories-William-Shakespeare/dp/1974052672",
      },
    ],
  },
];

export const bySection = (s: Book["section"]) => books.filter((b) => b.section === s);
export const findBook = (id: string) => books.find((b) => b.id === id);
