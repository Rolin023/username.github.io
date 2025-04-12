// script.js

// 1. 定义名茶数据 (!!! 重点：更新坐标 !!!)
const famousTeas = [
    {
        id: 'longjing',
        name: '西湖龙井',
        location: '浙江杭州',
        coords: { top: '51%', left: '56.5%' }, // 浙江偏东南
        image: 'images/longjing.jpg',
        teaInfo: '西湖龙井，产于浙江杭州西湖龙井村一带，具有“色绿、香郁、味甘、形美”四绝特点，是中国最著名的绿茶之一。',
        personName: '乾隆皇帝', // 修正：统一 key 为 personName
        personInfo: '传说乾隆皇帝下江南时，曾亲访龙井茶区，品尝龙井茶后赞不绝口，并将狮峰山下胡公庙前的十八棵茶树封为“御茶”。'
    },
    {
        id: 'biluochun',
        name: '洞庭碧螺春',
        location: '江苏苏州',
        coords: { top: '50%', left: '58%' }, // 江苏在浙江北面一点
        image: 'images/biluochun.jpg',
        teaInfo: '碧螺春产于江苏省苏州市吴中区太湖的东洞庭山及西洞庭山（今苏州吴中区）一带，属于绿茶类，以形美、色艳、香浓、味醇“四绝”闻名。',
        personName: '康熙皇帝', // 修改为康熙，更常见说法，统一 key 为 personName
        personInfo: '传说碧螺春原名“吓煞人香”，因康熙皇帝南巡品尝后觉得名字不雅，又喜爱其色碧绿、形似螺旋、采于早春，遂赐名“碧螺春”。'
    },
    {
        id: 'tieguanyin',
        name: '安溪铁观音',
        location: '福建安溪',
        coords: { top: '55%', left: '57%' }, // 福建在浙江南面
        image: 'images/tieguanyin.jpg',
        teaInfo: '铁观音原产于福建泉州市安溪县西坪镇，属于乌龙茶类，介于绿茶和红茶之间，有“七泡有余香”之誉。',
        personName: '魏饮 / 王士让',
        personInfo: '关于铁观音的来源有两个传说，一是“魏说”，书生魏饮发现；二是“王说”，官员王士让发现。两者都描述了在神明指引或偶然机会下发现了这种独特的茶树。'
    },
    {
        id: 'puer',
        name: '普洱茶',
        location: '云南',
        coords: { top: '55.5%', left: '46.5%' }, // 云南在西南
        image: 'images/puer.jpg',
        teaInfo: '普洱茶主要产于云南省的西双版纳、临沧、普洱等地区。以地理标志保护范围内的云南大叶种晒青茶为原料，分为生茶和熟茶，具有越陈越香的特点。',
        personName: '诸葛亮',
        personInfo: '传说三国时期，诸葛亮南征时曾途经云南，教导当地居民种茶制茶，被后世尊为茶祖。许多古茶山和茶树都与诸葛亮有关的传说。'
    },
    {
        id: 'dahongpao',
        name: '武夷大红袍',
        location: '福建武夷山',
        coords: { top: '53%', left: '57%' }, // 福建北部
        image: 'images/dahongpao.jpg',
        teaInfo: '大红袍产于福建武夷山，是中国最著名的乌龙茶之一，素有“茶中状元”的美誉，属于岩茶的一种。香气馥郁，滋味醇厚。',
        personName: '范仲淹、朱熹（宋代）',
        personInfo: '范仲淹诗赞“溪边奇茗冠天下，武夷仙人从古栽”，朱熹则于武夷山讲学时推广茶文化。'
    },
    {
        id: 'maofeng',
        name: '黄山毛峰',
        location: '安徽黄山',
        coords: { top: '50%', left: '56.5%' }, // 安徽在浙江江苏西边
        image: 'images/maofeng.jpg',
        teaInfo: '黄山毛峰产于安徽省黄山（徽州）一带，是中国十大名茶之一，属于绿茶。外形微卷，状似雀舌，绿中泛黄，银毫显露，带有清香。',
        personName: '谢正安',
        personInfo: '清朝光绪年间，徽州商人谢正安为满足市场需求，在黄山充山源创制了风味独特的“毛峰”，因其白毫披身，芽尖似峰，且产于黄山，故名黄山毛峰。'
    },
    {
        id: 'rizhaolv',
        name: '日照绿茶',
        location: '山东日照',
        coords: { top: '45%', left: '57%' }, // 山东东南部，黄海沿岸
        image: 'images/rizhaolv.jpg', // 您需要提供此图片
        teaInfo: '日照绿茶产于山东省日照市，是中国最北方的绿茶产区之一。因纬度高、光照足、昼夜温差大，茶叶内含物丰富，具有“汤色黄绿明亮、栗香浓郁、回味甘醇、叶片厚、耐冲泡”的特点。',
        personName: '（现代发展）',
        personInfo: '日照绿茶作为北方茶叶的代表，是“南茶北引”成功的典范，其发展主要得益于现代农业科技和当地政府的推广。'
    },
    {
        id: 'laoshanlv',
        name: '崂山绿茶',
        location: '山东青岛',
        coords: { top: '44%', left: '58%' }, // 山东半岛东南部，青岛崂山
        image: 'images/laoshanlv.jpg', // 您需要提供此图片
        teaInfo: '崂山绿茶产于山东省青岛市崂山区。独特的海洋性气候和崂山矿泉水灌溉赋予其“叶片厚、滋味浓、香气高、耐冲泡”的品质特征，豆香味（或称豌豆香）是其典型特点。',
        personName: '蒲松龄',
        personInfo: '清代文学家蒲松龄曾于崂山修道观创作《聊斋志异》，书中《崂山道士》篇隐含对山间灵物的遐想。近代康有为游崂山时题诗：“海上仙山属崂顶，云雾深处出绿芽”，暗合崂山茶的清灵特质。'
    },
    {
        id: 'xinyangmj',
        name: '信阳毛尖',
        location: '河南信阳',
        coords: { top: '48%', left: '54.5%' }, // 河南南部，淮河上游
        image: 'images/xinyangmj.jpg', // 您需要提供此图片
        teaInfo: '信阳毛尖，产于河南省信阳市。中国十大名茶之一，属于绿茶。外形细、圆、光、直，色泽翠绿，白毫显露，汤色嫩绿明亮，香气高爽，滋味鲜醇。素以“细、圆、光、直、多白毫、香高、味浓、汤色绿”的独特风格而饮誉中外。',
        personName: '（历史悠久）',
        personInfo: '信阳地区种茶历史悠久，可追溯至唐代。现代信阳毛尖的工艺成型于清末民初，并在1915年巴拿马万国博览会上获得金奖。'
    },
    {
        id: 'ziyangfuxi',
        name: '紫阳富硒茶',
        location: '陕西紫阳',
        coords: { top: '47.8%', left: '50.8%' }, // 陕西南部，汉江流域
        image: 'images/ziyangfuxi.jpg', // 您需要提供此图片
        teaInfo: '紫阳富硒茶产于陕西省安康市紫阳县。因土壤天然富含硒元素，茶叶中硒含量较高而得名。属于绿茶类，具有“条索圆紧、色泽翠绿、栗香浓郁、汤色黄绿明亮、滋味醇厚回甘”的特点。',
        personName: '（药用历史）',
        personInfo: '紫阳县产茶历史悠久，唐代即为贡品。民间自古就有将紫阳茶作为药物使用的传统，现代科学研究证实了其富含硒元素的特点。'
    },
    {
        id: 'wuzixianhao',
        name: '午子仙毫',
        location: '陕西汉中',
        coords: { top: '47%', left: '49.5%' }, // 陕西南部，汉中盆地西乡县
        image: 'images/wuzixianhao.jpg', // 您需要提供此图片
        teaInfo: '午子仙毫是陕西省汉中市西乡县的特产绿茶，也是陕西名茶之一。因产于午子山而得名。外形微扁挺秀，形似兰花，色泽翠绿，白毫显露，香气鲜嫩，汤色浅绿明亮，滋味鲜爽回甘。',
        personName: '（地理标志）',
        personInfo: '午子仙毫是中国国家地理标志产品，其品质受到当地独特自然环境（秦巴山区，汉水流域）的影响。'
    }
];

// 2. 获取 DOM 元素 (保持不变)
const mapViewport = document.getElementById('map-viewport');
const mapContent = document.getElementById('map-content');
const popup = document.getElementById('info-popup');
const popupTitle = document.getElementById('popup-title');
const popupImg = document.getElementById('popup-img');
const popupTeaInfo = document.getElementById('popup-tea-info');
const popupPersonTitle = document.getElementById('popup-person-title');
const popupPersonInfo = document.getElementById('popup-person-info');

// 3. 动态创建并放置茶叶标记 (保持不变, 会自动处理新增数据)
famousTeas.forEach(tea => {
    const marker = document.createElement('div');
    marker.classList.add('tea-marker');
    marker.style.top = tea.coords.top;
    marker.style.left = tea.coords.left;
    marker.textContent = '🍃'; // 或者 tea.name[0];
    marker.title = tea.name;

    marker.addEventListener('click', (event) => {
        event.stopPropagation();
        showPopup(tea);
    });

    mapContent.appendChild(marker);
});

// 4. 显示弹出窗口并填充内容 (保持不变, 逻辑已兼容可能缺失的名人信息)
function showPopup(teaData) {
    popupTitle.textContent = teaData.name + ' (' + teaData.location + ')';
    popupTeaInfo.textContent = teaData.teaInfo;
    const personName = teaData.personName ? teaData.personName : '暂无信息';
    popupPersonInfo.textContent = teaData.personInfo ? teaData.personInfo : '';

    if (teaData.image && teaData.image !== '') {
        popupImg.src = teaData.image;
        popupImg.alt = teaData.name;
        popupImg.style.display = 'block';
    } else {
        popupImg.style.display = 'none'; // 如果没有图片路径，则隐藏图片元素
    }

    // 如果 personName 存在且不是 '暂无信息' 才显示标题，否则隐藏名人部分或显示通用标题
    popupPersonTitle.textContent = (teaData.personName && teaData.personName !== '暂无信息') ? '相关名人/信息: ' + personName : '相关信息';
    // 如果 personInfo 为空，也隐藏名人信息段落
    popupPersonInfo.style.display = teaData.personInfo ? 'block' : 'none';
    // 如果标题是通用标题且没有 personInfo，则隐藏标题
    if (popupPersonTitle.textContent === '相关信息' && !teaData.personInfo) {
       popupPersonTitle.style.display = 'none';
    } else {
       popupPersonTitle.style.display = 'block';
    }


    popup.classList.remove('hidden');
}


// 5. 关闭弹出窗口 (保持不变)
function closePopup() {
    popup.classList.add('hidden');
}

// 6. 初始化 Panzoom (保持不变)
document.addEventListener('DOMContentLoaded', (event) => {
    const panzoomElement = document.getElementById('map-content');
    if (panzoomElement) {
        const panzoomInstance = Panzoom(panzoomElement, {
            maxScale: 5,
            minScale: 0.5,
            contain: 'outside',
            cursor: 'grab',
        });

        mapViewport.addEventListener('wheel', function(event) {
            event.preventDefault();
            panzoomInstance.zoomWithWheel(event);
        });

        // 添加点击地图空白处关闭弹窗的功能
        mapContent.addEventListener('click', function(event) {
            // 检查点击的是否是 mapContent 本身而不是 marker
            if (event.target === mapContent) {
                closePopup();
            }
        });

    } else {
        console.error("Panzoom target element (#map-content) not found.");
    }
});
