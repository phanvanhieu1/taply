const json_data = __DATA__;
const username = json_data['name'];
const cover_img = json_data['cover-image'];
const avatar_img = json_data['avatar-image']
const skills = json_data['skills'];
const bio_storys = json_data['bio-storys']
const links = json_data['links']
const page_title = json_data['config']['title'];
const page_favicon = json_data['config']['favicon'];
$(document).ready(function() {
            console.log('Hiếu 2k7!!!')
            draw_console_header();
            var container = document.getElementsByClassName('container')[0];
            var bio_story_html = '';
            var skills_html = '';
            var links_html = '';
            document.title = page_title;
            document.getElementById('favicon').setAttribute('href', `./public/images/${page_favicon}`);
            var split_name = username.split();
            var first_name = '';
            var last_name = '';
            if (split_name.length <= 2) { first_name = split_name.join(' '); } else if (split_name == 3) { first_name = split_name[0] + split_name[1];
                last_name = split_name[2]; } else if (split_name == 4) { first_name = split_name[0] + split_name[1];
                last_name = split_name[2] + split_name[3]; }
            for (let i = 0; i < skills.length; i++) { if (i % 2 == 0) { skills_html += `
                <div class="skill-item" style="color: #EF9D64;" >${skills[i]}</div>
            `; } else { skills_html += `
                <div class="skill-item" style="color: #85D18A;" >${skills[i]}</div>
            `; } }
            for (let i = 0; i < bio_storys.length; i++) { bio_story_html += `
        <div class="bio-story">
            <div class="bio-story-thumb"
                style="background-image: url('./public/images/${bio_storys[i]['image']}');"
            ></div>
            <div class="bio-story-content">
                <p>${bio_storys[i]['content']}</p>
                <span>${bio_storys[i]['author']}</span>
            </div>
        </div>
        `; }
            container.innerHTML += `
    <header>
        <div id="cover-image"
            style="background-image: url('./public/images/${cover_img}');"
        ></div>
        <div id="profile-header">
            <div id="avatar-image"
                style="background-image: url('./public/images/${avatar_img}');"
            ></div>
            <div id="name">
                <p id="first-name" class="names">${first_name}</p>
                <p id="last-name" class="names">${last_name}</p>
                <div id="skills">
                    ${skills_html}
                </div>
            </div>
        </div>
        ${bio_story_html}
    </header>
    `;
            for (let i = 0; i < links.length; i++) { links_html += `
        <div class="link-item">
            <div class="bio-story-thumb"
            style="background-image: url('./public/images/flatform/${links[i]['image']}');"
            ></div>
            <div class="link-content" onclick="${links[i]['type']==0?`window.open(${"'"}${links[i]['value']}${"'"}, '_blank')`:`copy(${"'"}${links[i]['value']}${"'"})`}">
                <p>${links[i]['title']}</p>
                <span>${links[i]['show-value']}</span>
            </div>
            <div class="link-btn">
                <div class="link-btn-chill ${links[i]['type']==3}"
                onclick="${links[i]['type']==3?`copy(${"'"}${links[i]['value']}${"'"})`:`window.open(${"'"}${links[i]['value']}${"'"}, '_blank')`}"
                >${links[i]['type']==3?'Gọi':''}</div>
            </div>
        </div>
        `;}
container.innerHTML+=`
    <div id="content-body">
        <p class="drop-title">Liên Kết Cá Nhân</p>
        <div id="link-box">
            ${links_html}
        </div>
    </div>
    `;});function copy(str){const el=document.createElement('textarea');el.value=str;document.body.appendChild(el);el.select();document.execCommand('copy');document.body.removeChild(el);show_modal(`Đã sao chép ${str} vào bộ nhớ tạm !`);}
function show_modal(str){document.getElementById('description').innerText=str;document.getElementsByClassName("popup")[0].classList.add("active");}
document.getElementById("dismiss-popup-btn").addEventListener("click",function(){document.getElementsByClassName("popup")[0].classList.remove("active");});function draw_console_header(){console.log(`                                            


    Source code by :  Phan Văn Hiếu
    Facebook : https://www.facebook.com/hieu.phanvan.9699
    Gmail: hieuvippro2007.yt@gmail.com
    31/5/2022
    `);}