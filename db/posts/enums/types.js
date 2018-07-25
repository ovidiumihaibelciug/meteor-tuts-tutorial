const PostTypesEnum = {
    NATURE: 'nature',
    PSYCHOLOGY: 'psychology',
    MUSIC: 'music',
    PROGRAMMING: 'programming',
    PROJECT_MANAGEMENT: 'project_management',
    OTHER: 'other'
}

const PostTypesLabel = {
    [PostTypesEnum.NATURE]: 'Nature',
    [PostTypesEnum.PSYCHOLOGY]: 'Psychology',
    [PostTypesEnum.MUSIC]: 'Music',
    [PostTypesEnum.PROGRAMMING]: 'Programming',
    [PostTypesEnum.PROJECT_MANAGEMENT]: 'Project Management',
    [PostTypesEnum.OTHER]: 'Other'
}

export default PostTypesEnum;

export {
    PostTypesEnum,
    PostTypesLabel
}