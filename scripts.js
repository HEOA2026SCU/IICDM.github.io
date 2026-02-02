// 示例：研究动态的链接列表
const newsLinks = [
    { title: "会议纪要1", url: "https://example.com/meeting1" },
    { title: "调研记录2", url: "https://example.com/survey2" },
    { title: "新闻发布3", url: "https://example.com/news3" }
];

// 动态填充研究动态链接
const newsList = document.getElementById("news-links");
newsLinks.forEach(link => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.title;
    li.appendChild(a);
    newsList.appendChild(li);
});

// 示例：研究成果的文档列表
const documents = [
    { title: "研究报告1", url: "https://example.com/report1" },
    { title: "研究成果2", url: "https://example.com/result2" }
];

// 动态填充研究成果文档
const documentSection = document.getElementById("documents");
documents.forEach(doc => {
    const p = document.createElement("p");
    const a = document.createElement("a");
    a.href = doc.url;
    a.textContent = doc.title;
    p.appendChild(a);
    documentSection.appendChild(p);
});
