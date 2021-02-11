define(function(require, exports, module) {
    return module.exports = {
        'template': {
            'default': 'Mapa myśli',
            'tianpan': 'Mapa nieba', // TODO
            'structure': 'Schemat organizacyjny',
            'filetree': 'Schemat struktury katalogów',
            'right': 'Diagram struktury logicznej',
            'fish-bone': 'Fish bone figure' // TODO
        },
        'theme': {
            'classic': 'Klasyczny',
            'classic-compact': 'Klasyczny kompaktowy',
            'snow': 'Śnieg - Delikatne zimne światło',
            'snow-compact': 'Śnieg - kompaktowy',
            'fish': 'Fish bone map', // TODO
            'wire': 'Model szkieletowy',
            'fresh-red': 'Świeży czerwony',
            'fresh-soil': 'Brudny żółty',
            'fresh-green': 'Artystyczna zieleń',
            'fresh-blue': 'Błękit nieba',
            'fresh-purple': 'Romantyczny fiolet',
            'fresh-pink': 'Mind powder', // TODO
            'fresh-red-compat': 'Kompaktowy świeży czerwony',
            'fresh-soil-compat': 'Kompaktowy żółty',
            'fresh-green-compat': 'Kompaktowy zielony',
            'fresh-blue-compat': 'Kompaktowy niebieski',
            'fresh-purple-compat': 'Kompaktowy fioletowy',
            'fresh-pink-compat': 'Compact powder', // TODO
            'tianpan': 'Classic dial', // TODO
            'tianpan-compact': 'Compact day' // TODO
        },
        'maintopic': 'Motyw przewodni',
        'topic': 'branch topic',
        'panels': {
            'history': 'historia',
            'template': 'szablon',
            'theme': 'wygląd',
            'layout': 'układ',
            'style': 'styl',
            'font': 'tekst',
            'color': 'kolor',
            'background': 'tło',
            'insert': 'wstaw',
            'arrange': 'zmień układ',
            'nodeop': 'bieżący',
            'priority': 'priorytet',
            'progress': 'postęp',
            'resource': 'zasób',
            'note': 'notatka',
            'attachment': 'załącznik',
            'word': 'tekst'
        },
        'ui': {
            'command': {
                'appendsiblingnode': 'Wstaw węzeł rownoległy',
                'appendparentnode': 'Wstaw węzeł nadrzędny',
                'appendchildnode': 'Wstaw węzeł podrzędny',
                'removenode': 'Usuń',
                'editnode': 'Edytuj',
                'arrangeup': 'W górę',
                'arrangedown': 'W dół',
                'resetlayout': 'Zresetuj układ',
                'expandtoleaf': 'Rozwiń wszystkie węzły',
                'expandtolevel1': 'Rozwiń do poziomu 1',
                'expandtolevel2': 'Rozwiń do poziomu 2',
                'expandtolevel3': 'Rozwiń do poziomu 3',
                'expandtolevel4': 'Rozwiń do poziomu 4',
                'expandtolevel5': 'Rozwiń do poziomu 5',
                'expandtolevel6': 'Rozwiń do poziomu 6',
                'fullscreen': 'pełny ekran',
                'outline': 'zarys'
            },
            'search': 'Szukaj',
            'expandtoleaf': 'Rozwiń',
            'back': 'wróć',
            'undo': 'Cofnij (Ctrl + Z)',
            'redo': 'Powtórz (Ctrl + Y)',
            'tabs': {
                'idea': 'Idea',
                'appearence': 'Wygląd',
                'view': 'Widok'
            },
            'bold': 'Pogrubienie',
            'italic': 'Kursywa',
            'forecolor': 'Kolor czcionki',
            'fontfamily': 'Czcionka',
            'fontsize': 'Rozmiar',
            'layoutstyle': 'Styl',
            'node': 'Działania na wezłach',
            'hand': 'Zezwól na przeciąganie',
            'camera': 'Znajdź główny węzeł',
            'zoom-in': 'Powiększ (Ctrl+)',
            'zoom-out': 'Zmniejsz (Ctrl-)',
            'markers': 'tag', // TODO
            'help': 'Pomoc',
            'preference': 'Preferencje',
            'expandnode': 'Rozwiń do liścia',
            'collapsenode': 'receive a level one node', // TODO
            'template': 'szablon',
            'theme': 'wygląd',
            'clearstyle': 'Wyczyść styl',
            'copystyle': 'Kopiuj styl',
            'pastestyle': 'Wklej styl',
            'appendsiblingnode': 'ten sam wygląd',
            'appendchildnode': 'podległy wygląd', // TODO
            'arrangeup': 'pre-tune', // TODO
            'arrangedown': 'post-tune', // TODO
            'editnode': 'Edytuj',
            'removenode': 'usuń',
            'priority': 'Priorytet',
            'progress': {
                'p1': 'nie zaczęty',
                'p2': 'Zrealizowany w 1/8',
                'p3': 'Zrealizowany w 1/4',
                'p4': 'Zrealizowany w 3/8',
                'p5': 'Zrealizowany w połowie',
                'p6': 'Zrealizowany w 5/8',
                'p7': 'Zrealizowany w 3/4',
                'p8': 'Zrealizowany w 7/8',
                'p9': 'Zrealizowany',
                'p0': 'Wyczyść prostęp'
            },
            'resource': {
                'add': 'Dodaj'
            },
            'link': 'Odnośnik',
            'image': 'Obraz',
            'note': 'Notatka',
            'insertlink': 'Wstaw odnośnik',
            'insertimage': 'Wstaw obraz',
            'insertnote': 'Wstaw notatkę',
            'removelink': 'Usuń odnośnik',
            'removeimage': 'Usuń obraz',
            'removenote': 'Usuń notatkę',
            'resetlayout': 'Organizuj',
            'navigator': 'Nawigator',
            'selectall': 'Zaznacz wszystko',
            'selectrevert': 'Select revert', // TODO
            
            
            
            
            
            
            'selectsiblings': 'Select siblings',
            'selectlevel': 'Select level',
            'selectpath': 'Select path',
            'selecttree': 'Select subtree',
            'noteeditor': {
                'title': 'Note',
                'hint': 'Support GFM grammar',
                'placeholder': 'Please select a node to edit note'
            },
            'dialog': {
                'image': {
                    'title': 'Image',
                    'imagesearch': 'Image search',
                    'keyword': 'Keyword：',
                    'placeholder': 'Please input the keyword for search',
                    'baidu': 'Search',
                    'linkimage': 'Linked Image',
                    'linkurl': 'URL：',
                    'placeholder2': 'Require：start with http(s)://',
                    'imagehint': 'Hint：',
                    'placeholder3': 'Optional：The text that the mouse prompts when hovering over the image',
                    'preview': 'Image preview：',
                    'uploadimage': 'Upload Image',
                    'selectfile': 'Select file...',
                    'ok': 'OK',
                    'cancel': 'Cancel',
                    'formatinfo': 'file ext must be jpg、gif or png'
                },
                'hyperlink': {
                    'title': 'Link',
                    'linkurl': 'Link url：',
                    'linkhint': 'Hint：',
                    'placeholder': 'Require：start with http(s):// or ftp://',
                    'placeholder2': 'Optional: The text that the mouse prompts when hovering over the link',
                    'ok': 'OK',
                    'cancel': 'Cancel'

                },
                'exportnode': {
                    'title': 'Export Node',
                    'ok': 'OK',
                    'cancel': 'Cancel'
                }
            }
        },
        'runtime': {
            'minder': {
                'maintopic': 'Main Topic'
            },
            'node': {
                'arrangeup': 'Arrange Up',
                'appendchildnode': 'Append Child Node',
                'appendsiblingnode': 'Append Sibling Node',
                'arrangedown': 'Arrange Down',
                'removenode': 'Delete',
                'appendparentnode': 'Append Parent Node',
                'selectall': 'Select All',
                'topic': 'Topic',
                'importnode': 'Import Node',
                'exportnode': 'Export Node'
            },
            'input': {
                'edit': 'Edit'
            },
            'priority': {
                'main': 'Priority',
                'remove': 'Delete',
                'esc': 'Esc'
            },
            'progress': {
                'main': 'Progress',
                'remove': 'Delete',
                'esc': 'Esc'
            },
            'history': {
                'undo': 'Undo',
                'redo': 'Redo'
            }
        }
    };
});
