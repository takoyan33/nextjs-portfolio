import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import usePortfolioModal from '../parts/usePortfolioModal'
import ScrollComponent from '../../hooks/useFadeIn'
import Image from 'next/image'

export default function Skill({ name, rank, tag, icon, about }) {
  const [Modal, open, close, isOpen] = usePortfolioModal()
  return (
    <>
      <div className='skill__flx_el'>
        <ScrollComponent>
          <a onClick={open} target='_blank'>
            <div className='skill__svg'>
              <Image
                src={icon}
                alt='ポートフォリオ画像'
                fill
                className='skill__svg'
                sizes='(min-width: 768px)'
              />
            </div>
            <p className='skill_text'>{name} </p>
            <p className='skill_text'>{rank}</p>
          </a>
        </ScrollComponent>
      </div>

      <Modal>
        <div className='bg-white'>
          <button onClick={close} className='modalBox_btn w-100'>
            <img src='/images/close-icon.svg' alt='閉じる' />
          </button>
          <div className='modalBox'>
            <div className='modalBox__element'>
              <h2 className='skill_text'>{name}</h2>
              <p className='tac'>
                <Image
                  src={icon}
                  alt='ポートフォリオ画像'
                  fill
                  className='skill__svg'
                  sizes='(min-width: 768px)'
                />
              </p>
            </div>

            <div className='modalBox__element'>
              <p className='modal-text'>
                技術力<br></br>
                {rank}
              </p>
              <p className='modal-text'>
                使用技術<br></br>
                {tag}
              </p>
              <p className='modal-text'>
                概要<br></br>
                {about}
              </p>
              <p className='modal-text'>
                使用例<br></br>ー
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
