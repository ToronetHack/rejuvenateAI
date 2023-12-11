import {
    type ComponentWithAs,
    Link,
    Text,
    Box,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    Td,
    TableCaption,
    TableContainer,
    Heading,
    Image,
} from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { HTMLChakraProps, ThemingProps } from '@chakra-ui/system';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

interface BlockQuoteProps
    extends HTMLChakraProps<'blockquote'>,
        ThemingProps<'Container'> {
    align?: '';
}
const BlockQuote = Box as ComponentWithAs<'blockquote', BlockQuoteProps>;

const MarkdownRenderer = ({ markdown }: { markdown: string }) => {
    return (
        <ReactMarkdown
            // eslint-disable-next-line react/no-children-prop
            children={markdown}
            remarkPlugins={[remarkGfm]}
            components={{
                a: ({ node, ...props }) => (
                    <Link {...props} color={'primaryColor.600'} isExternal />
                ),
                p: ({ node, ...props }) => <Text {...props} my={4} />,
                table: ({ node, ...props }) => (
                    <TableContainer
                        my={8}
                        borderRadius={'md'}
                        border={'1px'}
                        borderColor={'gray.300'}
                        py={4}
                    >
                        <Table {...props} variant={'striped'} />
                    </TableContainer>
                ),

                caption: ({ node, ...props }) => <TableCaption {...props} />,
                //@ts-ignore
                ul: ({ node, ordered, className, ...props }) =>
                    className === 'contains-task-list' ? (
                        <List className={className} {...props} />
                    ) : (
                        //@ts-ignore
                        <OrderedList className={className} {...props} />
                    ),
                    //@ts-ignore
                ol: ({ node, ordered, className, ...props }) =>
                    className === 'contains-task-list' ? (
                        <List className={className} {...props} />
                    ) : (
                        <OrderedList className={className} {...props} />
                    ),
                    //@ts-ignore
                li: ({ ordered, node, checked, className, ...props }) =>
                    className === 'task-list-item' ? (
                        <ListItem className={className} {...props}>
                            <ListIcon
                                as={
                                    checked
                                        ? MdCheckBox
                                        : MdCheckBoxOutlineBlank
                                }
                            />{' '}
                            {props.content}
                        </ListItem>
                    ) : (
                        <ListItem className={className} {...props} />
                    ),
                    //@ts-ignore
                th: ({ node, isHeader, ...props }) => (
                    <Th fontSize={'md'} {...props} />
                ),
                td: ({ node, ...props }) => <Td {...props} />,
                //@ts-ignore
                tr: ({ node, isHeader, ...props }) => <Tr {...props} />,
                tbody: ({ node, ...props }) => <Tbody {...props} />,
                thead: ({ node, ...props }) => <Thead {...props} />,
                tfoot: ({ node, ...props }) => <Tfoot {...props} />,
                img: ({ node, alt, ...props }) => (
                    <Image alt={alt} {...props} />
                ),
                h1: ({ node, ...props }) => (
                    <Heading as={'h1'} size={'2xl'} my={'6'} {...props} />
                ),
                h2: ({ node, ...props }) => (
                    <Heading as={'h2'} size={'xl'} my={'5'} {...props} />
                ),
                h3: ({ node, ...props }) => (
                    <Heading as={'h3'} size={'lg'} my={'4'} {...props} />
                ),
                h4: ({ node, ...props }) => (
                    <Heading as={'h4'} size={'md'} my={'3'} {...props} />
                ),
                h5: ({ node, ...props }) => (
                    <Heading as={'h5'} size={'sm'} my={'2'} {...props} />
                ),
                h6: ({ node, ...props }) => (
                    <Heading as={'h6'} size={'xs'} my={'1'} {...props} />
                ),

                blockquote: ({ node, ...props }) => (
                    <BlockQuote
                        borderLeft={'4px'}
                        borderTopLeftRadius={'base'}
                        borderBottomLeftRadius={'base'}
                        borderColor={'orange.600'}
                        as={'blockquote'}
                        {...props}
                        my={6}
                        pl={{ lg: 8, base: 6 }}
                        maxW={'700'}
                        py={6}
                        pr={4}
                        bg={'orange.50'}
                    />
                ),
            }}
        />
    );
};

export default MarkdownRenderer;
