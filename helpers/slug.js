export default function urlSlug(title) {
    let regex = /\s+/g;
    
    let slug = title
        .toLowerCase()
        .trim()
        .split(regex)
        .join('-')
    return slug;
};

